import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-valor-tipo',
  templateUrl: './tabela-valor-tipo.component.html',
  styleUrls: ['./tabela-valor-tipo.component.scss']
})
export class TabelaValorTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasValorTipo;
  }
  
}
