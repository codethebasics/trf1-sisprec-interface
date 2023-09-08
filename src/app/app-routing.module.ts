import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaTabelaComponent } from './cjf/consulta-tabela/consulta-tabela.component';

const routes: Routes = [
  { path: '', component: ConsultaTabelaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
