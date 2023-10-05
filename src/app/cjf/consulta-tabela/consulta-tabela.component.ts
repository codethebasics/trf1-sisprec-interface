import { Component } from '@angular/core';
import { TabelaEnum } from '../enum/tabela-enum';
import { ConsultaTabelaService } from './consulta-tabela.service';

@Component({
  selector: 'app-consulta-tabela',
  templateUrl: './consulta-tabela.component.html',
  styleUrls: ['./consulta-tabela.component.scss']
})
export class ConsultaTabelaComponent {

  loading: boolean = false;

  opcaoSelecionada: String;
  message: string;
  response: any[] = [];
  dados: any = [];
  beneficiarioSucessaoTipo: any[] = [
    { tipo: "CESSIONARIO" },
    { tipo: "SUCESSOR" },
    { tipo: "TERCEIRO" }, 
    { tipo: "HERDEIRO" }
  ];

  /**
   * Opções de tabelas disponíveis para serem consultadas
   */
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
  
  /**
   * Realiza consulta em tabela do CJF
   */
  getTabela() {
    this.dados = [];
    this.response = [];
    this.loading = true;

    if (this.opcaoSelecionada === TabelaEnum.BENEFICIARIO_SUCESSAO_TIPO) {
      this.dados = this.beneficiarioSucessaoTipo;
    } 
    else {
      this.consultaTabelaService.getTabelaItens(this.opcaoSelecionada)
        .subscribe({
          next: response => {
            if (response && response.result) {
              this.dados = response.result?.retorno;
            }
            else  {
              this.message = 'Nenhum registro encontrado';
            }
          },
          error: error => console.error(error),
          complete: () => this.loading = false
        });
    }

  }

  /**
   * Limpa opção selecionada
   */
  reset() {
    this.dados = [];
  }

}
