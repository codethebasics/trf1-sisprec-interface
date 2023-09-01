import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-unidade-judicial-tipo',
  templateUrl: './tabela-unidade-judicial-tipo.component.html',
  styleUrls: ['./tabela-unidade-judicial-tipo.component.scss']
})
export class TabelaUnidadeJudicialTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasUnidadeJudicialTipo;
  }

}
