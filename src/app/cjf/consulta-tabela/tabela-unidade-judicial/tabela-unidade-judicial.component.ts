import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-unidade-judicial',
  templateUrl: './tabela-unidade-judicial.component.html',
  styleUrls: ['./tabela-unidade-judicial.component.scss']
})
export class TabelaUnidadeJudicialComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasUnidadeJudicial;
  }

}
