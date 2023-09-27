import { Component, OnInit } from '@angular/core';
import { ProcessosService } from 'src/app/cjf/processos/processos.service';
import { ProcessoWS } from '../model/processo-ws';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormAnaliseComponent } from './form-analise/form-analise.component';

import Util from 'src/app/shared/util';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {

  /**
   * processo analise form
   */
  masks = {
    dataAjuizamento: Util.mask__yyyy_MM_dd_hh_mm_ss()
  }

  processoRequest: ProcessoWS = {
    acaoOriginaria: {
      ajuizamentoData: '',
      numero: '',
      sequencial: 0,
      unidadeJudicial: {
        codigo: '',
        descricao: '',
        utilizacaoInicioData: '',
        utilizacaoFimData: '',
        registroData: '',
        municipio: {
          sequencial: 0,
          codigo: '',
          descricao: '',
          uf: ''
        },
      },
      unidadesJudiciais: []
    },
    advogados: [],
    assunto: {
      codigo: '',
      codigoCnj: '',
      dataAtualizacao: '',
      descricao: '',
      descricaoCnj: '',
      sequencial: 0
    },
    autuacaoData: '',
    autuacaoOriginariaData: '',
    beneficiarios: [],
    beneficiariosConta: 0,
    beneficiariosSomaValores: 0,
    bloqueio: false,
    cancelamentoData: '',
    contaBancaria: {},
    dataBaseUltimoCalculo: '',
    despesaClassificacao: {},
    processoNumero: '',
    registroData: ''
  };

  // acaoOriginaria
  acaoOriginariaAjuizamentoData: string;
  acaoOriginariaNumero: string;
  acaoOriginariaSequencial: string;

  // acaoOriginaria -> unidadeJudicial
  acaoJudiciariaUnidadeJudicialCodigo: number;
  acaoJudiciariaUnidadeJudicialDescricao: string;
  acaoJudiciariaUnidadeJudicialEntrada: string;
  acaoJudiciariaUnidadeJudicialRegistroData: string;
  acaoJudiciariaUnidadeJudicialDataSaida: string;
  acaoJudiciariaUnidadeJudicialUtilizacaoDataInicio: string;
  acaoJudiciariaUnidadeJudicialUtilizacaoDataFim: string;
  
  // acaoOriginaria -> unidadeJudicial -> municipio
  acaoJudiciariaUnidadeJudicialMunicipioCodigo: string;
  acaoJudiciariaUnidadeJudicialMunicipioDescricao: string;
  acaoJudiciariaUnidadeJudicialMunicipioSequencial: number;
  acaoJudiciariaUnidadeJudicialMunicipioUF: string;
  
  // acaoOriginaria -> unidadeJudicial -> unidadeTipo
  acaoJudiciariaUnidadeJudicialUnidadeTipoCodigo: string;
  acaoJudiciariaUnidadeJudicialUnidadeTipoDescricao: string;
  acaoJudiciariaUnidadeJudicialUnidadeTipoNatureza: string;
  acaoJudiciariaUnidadeJudicialUnidadeTipoSequencial: string;
  acaoJudiciariaUnidadeJudicialUnidadeTipoUtilizacaoFim: string;


  /**
   * ---------------------------------
   */

  loading: boolean = false;
  unidadesGestoras: string[];
  unidadeGestoraSelecionada: string = '090049';
  processo: string;
  maskProcesso: any[];
  maskPlanoAnoMes: any[];

  viewSelect = 'analisar';

  processos: [
    {
      codigo: number,
      contexto: string,
      motivo: string
    }
  ];

  processosSelecionados: ProcessoWS[];
  processoSelecionado: ProcessoWS;

  planosTipo = ['pct', 'rpv'];
  planoTipoSelecionado: string = 'pct';
  planoAnoMes: string;
  faseAnoMes: string;

  planoAnoMesSelecionado: string = '';
  faseAnoMesSelecionada: string = '';

  // Lista de processos a serem enviados para análise do CJF
  processosAnalise: ProcessoWS[] = [];

  constructor(private processosService: ProcessosService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.maskProcesso = Util.getProcessoMask();
    this.maskPlanoAnoMes = Util.getPlanoAnoMesMask();
    this.unidadesGestoras = Util.getUnidadesGestoras();    
  }

  getProcesso() {
    if (this.processo && this.unidadeGestoraSelecionada) {
      console.log('get processo', Util.stripProcesso(this.processo));
      this.processosService.getProcesso(this.processo, this.unidadeGestoraSelecionada)
        .subscribe({
          next: (response) => console.log('response', response),
          error: (error) => console.log('error', error),
          complete: () => console.log('complete')
        })
    }
  }

  postProcessoAnalise() {
    if (this.unidadeGestoraSelecionada && this.planoTipoSelecionado && this.processosSelecionados.length) {
      console.log('post processoAnalise');
      this.processosService.postProcessoAnalise(this.unidadeGestoraSelecionada, this.planoTipoSelecionado, this.processosSelecionados)
        .subscribe({
          next: (response) => console.log('response', response),
          error: (error) => console.log('error', error),
          complete: () => console.log('complete')
        })
    }
  }

  postProcesso() {
    const canPostProcesso = this.unidadeGestoraSelecionada 
      && this.planoTipoSelecionado 
      && this.planoAnoMesSelecionado 
      && this.faseAnoMesSelecionada 
      && this.processos.length;

    if (canPostProcesso) {
      this.processosService.postProcesso(
        this.unidadeGestoraSelecionada, 
        this.planoTipoSelecionado, 
        this.planoAnoMesSelecionado, 
        this.faseAnoMesSelecionada, 
        this.processosSelecionados
      )
        .subscribe({
          next: (response) => console.log('response', response),
          error: (error) => console.log('error', error),
          complete: () => console.log('complete')
        });
    }
  }

  patchProcesso() {
    const canPatchProcesso = this.unidadeGestoraSelecionada
      && this.processoSelecionado
      && this.planoTipoSelecionado
      && this.planoAnoMesSelecionado
      && this.faseAnoMesSelecionada

    if (canPatchProcesso) {
      this.processosService.patchProcesso(
        this.unidadeGestoraSelecionada,
        this.processoSelecionado,
        this.planoTipoSelecionado,
        this.planoAnoMesSelecionado,
        this.faseAnoMesSelecionada
      )
        .subscribe({
          next: (response) => console.log('response', response),
          error: (error) => console.log('error', error),
          complete: () => console.log('complete')
        })
    }
  }

  deleteProcesso() {
    const canDeleteProcesso = this.unidadeGestoraSelecionada
      && this.processoSelecionado
      && this.planoTipoSelecionado
      && this.planoAnoMesSelecionado
      && this.faseAnoMesSelecionada
    
      if (canDeleteProcesso) {
        this.processosService.deleteProcesso(
          this.unidadeGestoraSelecionada,
          this.processo,
          this.planoTipoSelecionado,
          this.planoAnoMesSelecionado,
          this.faseAnoMesSelecionada
        )
          .subscribe({
            next: (response) => console.log('response', response),
            error: (error) => console.log('error', error),
            complete: () => console.log('complete')
          })
      }
  }

  /**
   * Apresenta a janela de adição de processos para análise
   */
  displayAddProcessoAnaliseFrame() {

    // Configurando a modal
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;

    // Abrindo a modal
    const dialogRef = this.dialog.open(FormAnaliseComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

  setView(view: string) {
    this.viewSelect = view.trim();
  }

}
