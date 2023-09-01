import { Component } from '@angular/core';

import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-beneficiario-sucessao-tipo',
  templateUrl: './tabela-beneficiario-sucessao-tipo.component.html',
  styleUrls: ['./tabela-beneficiario-sucessao-tipo.component.scss']
})
export class TabelaBeneficiarioSucessaoTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasBeneficiarioSucessaoTipo;
  }

}
