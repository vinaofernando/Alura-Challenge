import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunidadeComponent } from './comunidade/comunidade/comunidade.component';
import { CodeComponent } from './editor-code/code/code.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Code',
  },
  {
    path: 'Code',
    component: CodeComponent,
  },
  {
    path: 'Comunidade',
    component: ComunidadeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
