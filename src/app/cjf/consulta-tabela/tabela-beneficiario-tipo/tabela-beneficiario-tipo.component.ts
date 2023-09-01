import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-beneficiario-tipo',
  templateUrl: './tabela-beneficiario-tipo.component.html',
  styleUrls: ['./tabela-beneficiario-tipo.component.scss']
})
export class TabelaBeneficiarioTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasBeneficiarioTipo;
  }
  
}
