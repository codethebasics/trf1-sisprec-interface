import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaTabelaComponent } from './cjf/consulta-tabela/consulta-tabela.component';
import { ConsultaFaseComponent } from './cjf/consulta-fase/consulta-fase.component';

const routes: Routes = [
  { path: '', component: ConsultaTabelaComponent },
  { path: 'consulta-fase', component: ConsultaFaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
