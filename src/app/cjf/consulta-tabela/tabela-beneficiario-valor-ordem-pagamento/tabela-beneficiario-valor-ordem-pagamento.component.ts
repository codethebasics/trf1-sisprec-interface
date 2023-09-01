import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-beneficiario-valor-ordem-pagamento',
  templateUrl: './tabela-beneficiario-valor-ordem-pagamento.component.html',
  styleUrls: ['./tabela-beneficiario-valor-ordem-pagamento.component.scss']
})
export class TabelaBeneficiarioValorOrdemPagamentoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasBeneficiarioValorOrdemPagamento107ATipo;
  }

}
