import { HighlightModule } from 'ngx-highlightjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCodeComponent } from './menu-code/menu-code.component';
import { PersonalizacaoComponent } from './personalizacao/personalizacao.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [MenuCodeComponent, PersonalizacaoComponent, CodeComponent],
  imports: [
    CommonModule,
    MensagemModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule,
  ],
  exports: [MenuCodeComponent, CodeComponent],
})
export class EditorCodeModule {}
