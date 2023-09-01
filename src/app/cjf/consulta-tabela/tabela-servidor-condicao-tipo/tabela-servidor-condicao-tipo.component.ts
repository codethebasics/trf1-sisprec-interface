import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-servidor-condicao-tipo',
  templateUrl: './tabela-servidor-condicao-tipo.component.html',
  styleUrls: ['./tabela-servidor-condicao-tipo.component.scss']
})
export class TabelaServidorCondicaoTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasServidorCondicaoTipo;
  }

}
