import { Element } from '@angular/compiler';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import hljs from 'highlight.js/lib/common';
import { Subject } from 'rxjs';
import { Code, CodeArea } from 'src/app/editor-code/code/code';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { EditorComponent } from '../editor/editor.component';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
})
export class CodeComponent implements OnInit {
  hljs = hljs.listLanguages();

  @Input() code!: string;
  @ViewChild(EditorComponent) editor!: EditorComponent;

  linguagemSelecionada$: Subject<string> = new Subject();
  linguagemSelecionada!: string;
  colorSelecionada: string = '#6BD1FF';
  textCode!: string;
  textoSelecionado$: Subject<string> = new Subject();
  titulo!: string;
  descricao!: string;
  validated: boolean = false;

  constructor(private readonly localStorageService: LocalStorageService) {}

  ngOnInit(): void {}
  ngAfterViewInit() {}

  atualizarConsole() {
    this.linguagemSelecionada$.next(this.linguagemSelecionada);
  }
  textoSelecionado($event: string) {
    this.textCode = $event;
  }
  salvarCor() {
    this.textoSelecionado$.next('');

    let codeArea: CodeArea = {
      code: this.editor.codeAtualizado.innerHTML,
      syntax: this.linguagemSelecionada,
      texteArea: this.descricao,
      titulo: this.titulo,
      color: this.colorSelecionada,
    };

    let code: Code = JSON.parse(this.localStorageService.get('code'));

    if (!code) code = [];

    code.push(codeArea);

    console.log(code);
    this.localStorageService.set('code', JSON.stringify(code));
  }
}
