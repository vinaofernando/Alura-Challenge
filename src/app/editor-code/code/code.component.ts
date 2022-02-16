import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import hljs from 'highlight.js/lib/common';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
})
export class CodeComponent implements OnInit {
  hljs = hljs.listLanguages();
  @ViewChild('editor') editor: any;

  @Input() code!: string;

  constructor() {}

  ngOnInit(): void {}

  atualizarLinguagem(linguagem: string) {
    const blocoCode = this.editor?.nativeElement;
    const codigo = blocoCode.innerText;
    blocoCode!.innerHTML = `<code class="preview outline-none hljs ${linguagem}" contenteditable="true" aria-label="Editor de código"></code>`;
    const code = blocoCode!.querySelector('code');
    code!.textContent = codigo;
    hljs.highlightElement(code as HTMLElement);
  }
}
