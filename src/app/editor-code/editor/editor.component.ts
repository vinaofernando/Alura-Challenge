import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import hljs from 'highlight.js/lib/common';
import { Subject } from 'rxjs';
import { Code, CodeArea } from '../code/code';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  hljs = hljs.listLanguages();

  @Input() colorSelecionada!: string;
  @Input() linguagemSelecionada$!: Subject<string>;
  @Input() textoSelecionado$!: Subject<string>;
  @Output() textCode: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('editor') editor!: ElementRef;
  @Input() listUpdate!: CodeArea;

  public generateCode!: string;
  public codeAtualizado!: Element;

  constructor() {}

  ngOnInit(): void {
    if (this.listUpdate) {
      this.colorSelecionada = this.listUpdate.color;
      this.generateCode = this.listUpdate.code;
    }
  }
  ngAfterViewInit() {
    if (this.linguagemSelecionada$)
      this.linguagemSelecionada$.subscribe((linguagem) => {
        if (this.editor) {
          const blocoCode = this.editor.nativeElement;
          const codigo = blocoCode.innerText;
          this.editor!.nativeElement.innerHTML = `<code class="preview outline-none hljs ${linguagem}" contenteditable="true" aria-label="Editor de código"></code>`;
          this.codeAtualizado = blocoCode!.querySelector('code');
          this.codeAtualizado!.textContent = codigo;
          hljs.highlightElement(this.codeAtualizado as HTMLElement);
        }
      });
    if (this.textoSelecionado$)
      this.textoSelecionado$.subscribe(() => {
        if (this.editor) {
          const blocoCode = this.editor.nativeElement;
          const codigo = blocoCode.innerText;
          this.codeAtualizado = blocoCode!.querySelector('code');
          this.codeAtualizado!.textContent = codigo;
          hljs.highlightElement(this.codeAtualizado as HTMLElement);
          this.textCode.emit(this.codeAtualizado);
        }
      });
  }
}
