import { Component } from '@angular/core';
import { TabelaEnum } from '../enum/tabela-enum';
import { ConsultaTabelaService } from './consulta-tabela.service';

import * as Colunas from './tabela-colunas'

@Component({
  selector: 'app-consulta-tabela',
  templateUrl: './consulta-tabela.component.html',
  styleUrls: ['./consulta-tabela.component.scss']
})
export class ConsultaTabelaComponent {

  opcaoSelecionada: String;
  response: any[] = [];
  mensagem: String;

  colunas: string[] = [];
  dados: any = [];

  tabelaOptions: String[] = [
    TabelaEnum.ASSUNTO,
    TabelaEnum.UNIDADE_JUDICIAL,
    TabelaEnum.UNIDADE,
    TabelaEnum.CLASSIFICACAO_DESPESA,
    TabelaEnum.INDICE,
    TabelaEnum.INDICE_TIPO,
    TabelaEnum.BENEFICIARIO_TIPO,
    TabelaEnum.BENEFICIARIO_SUCESSAO_TIPO,
    TabelaEnum.BENEFICIARIO_VALOR_ORDEM_PAGAMENTO_107A_TIPO,
    TabelaEnum.SERVIDOR_CONDICAO_TIPO,
    TabelaEnum.FASE_TIPO,
    TabelaEnum.IDENTIFICACAO_TIPO,
    TabelaEnum.MOVIMENTO_TIPO,
    TabelaEnum.SENTENCA_TIPO,
    TabelaEnum.UNIDADE_JUDICIAL_TIPO,
    TabelaEnum.VALOR_TIPO,
    TabelaEnum.DIVERGENCIA_TIPO
  ]

  constructor(private consultaTabelaService: ConsultaTabelaService) {

  }
  
  getTabela() {
    this.mensagem = "Consultando tabela..."
    this.consultaTabelaService.getTabelaItens(this.opcaoSelecionada)
      .subscribe({
        next: response => {
          this.dados = response.retorno,
          this.colunas = Colunas.colunasAssunto
        },
        error: error => console.log(error),
        complete: () => this.mensagem = ''
      });
  }


}
