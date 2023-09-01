import { Component, OnInit } from '@angular/core';

import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-assunto',
  templateUrl: './tabela-assunto.component.html',
  styleUrls: ['./tabela-assunto.component.scss']
})
export class TabelaAssuntoComponent implements OnInit {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasAssunto;
  }
}
