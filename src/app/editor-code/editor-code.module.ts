import { HighlightModule } from 'ngx-highlightjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCodeComponent } from './menu-code/menu-code.component';
import { PersonalizacaoComponent } from './personalizacao/personalizacao.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeComponent } from './code/code.component';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    MenuCodeComponent,
    PersonalizacaoComponent,
    CodeComponent,
    EditorComponent,
  ],
  imports: [
    CommonModule,
    MensagemModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule,
    SharedModule,
  ],
  exports: [MenuCodeComponent, CodeComponent, EditorComponent],
})
export class EditorCodeModule {}
