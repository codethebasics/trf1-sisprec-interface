import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaTabelaComponent } from './cjf/consulta-tabela/consulta-tabela.component';
import { ConsultaFaseComponent } from './cjf/consulta-fase/consulta-fase.component';
import { ProcessosComponent } from './cjf/processos/processos.component';
import { HomeComponent } from './system/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consulta-tabela', component: ConsultaTabelaComponent },
  { path: 'consulta-fase', component: ConsultaFaseComponent },
  { path: 'processos', component: ProcessosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
