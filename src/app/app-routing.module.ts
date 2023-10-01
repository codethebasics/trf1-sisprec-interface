import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaTabelaComponent } from './cjf/consulta-tabela/consulta-tabela.component';
import { ConsultaFaseComponent } from './cjf/consulta-fase/consulta-fase.component';
import { ProcessosComponent } from './cjf/processos/processos.component';
import { TabelaAssuntoDetalheComponent } from './cjf/consulta-tabela/tabela-assunto/tabela-assunto-detalhe/tabela-assunto-detalhe.component';

const routes: Routes = [
  { path: '', component: ConsultaTabelaComponent },
  { 
    path: 'consulta-tabela', 
    component: ConsultaTabelaComponent, 
    children: [
      { path: '', component: ConsultaTabelaComponent },
      { path: ':cod', component: TabelaAssuntoDetalheComponent}
    ] 
  },
  { path: 'consulta-fase', component: ConsultaFaseComponent },
  { path: 'processos', component: ProcessosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
