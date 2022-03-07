import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
export class CodeComponent {
  hljs = hljs.listLanguages();

  @Input() code!: string;
  @ViewChild(EditorComponent) editor!: EditorComponent;

  public linguagemSelecionada$: Subject<string> = new Subject();
  public linguagemSelecionada!: string;
  public colorSelecionada: string = '#6BD1FF';
  public textCode!: string;
  public textoSelecionado$: Subject<string> = new Subject();
  public titulo!: string;
  public descricao!: string;
  public validated: boolean = false;

  constructor(private readonly localStorageService: LocalStorageService) {}

  atualizarConsole() {
    this.linguagemSelecionada$.next(this.linguagemSelecionada);
  }
  textoSelecionado($event: string) {
    this.textCode = $event;
  }
  salvarCodigoModificado() {
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

    this.localStorageService.set('code', JSON.stringify(code));
    this.editor.codeAtualizado.innerHTML = '';
  }
}
