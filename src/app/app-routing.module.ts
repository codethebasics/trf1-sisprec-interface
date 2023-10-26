import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaTabelaComponent } from './cjf/consulta-tabela/consulta-tabela.component';
import { ConsultaFaseComponent } from './cjf/consulta-fase/consulta-fase.component';
import { ProcessosComponent } from './cjf/processos/processos.component';
import { TabelaAssuntoDetalheComponent } from './cjf/consulta-tabela/tabela-assunto/tabela-assunto-detalhe/tabela-assunto-detalhe.component';
import { ImportacaoComponent } from './cjf/importacao/importacao.component';
import { ProcessosSireaComponent } from './sirea/processos/processos-sirea.component';

const routes: Routes = [
  { path: '', component: ConsultaTabelaComponent },
  { path: 'consulta-tabela', component: ConsultaTabelaComponent },
  { path: 'consulta-tabela/:cod', component: TabelaAssuntoDetalheComponent },  
  { path: 'consulta-fase', component: ConsultaFaseComponent },
  { path: 'importacao', component: ImportacaoComponent },
  { path: 'processos', component: ProcessosComponent },
  { path: 'processos-sirea', component: ProcessosSireaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
