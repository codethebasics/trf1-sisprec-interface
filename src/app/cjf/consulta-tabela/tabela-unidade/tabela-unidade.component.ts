import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-unidade',
  templateUrl: './tabela-unidade.component.html',
  styleUrls: ['./tabela-unidade.component.scss']
})
export class TabelaUnidadeComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasUnidade;
  }

}
