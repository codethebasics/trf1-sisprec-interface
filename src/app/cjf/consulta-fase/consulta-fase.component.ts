import { Component, OnInit } from '@angular/core';
import { ConsultaFaseService } from './consulta-fase.service';
import { FaseWS } from '../model/fase-ws';
import { GlobalMessageService } from 'src/app/shared/global-message.service';

@Component({
  selector: 'app-consulta-fase',
  templateUrl: './consulta-fase.component.html',
  styleUrls: ['./consulta-fase.component.scss']
})
export class ConsultaFaseComponent implements OnInit {

  loading: boolean = false;
  mask = [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/];
  panelOpenState = false;

  status: string[] = ['todas', 'abertas', 'fechadas'];
  planosTipo = ['pct', 'rpv'];
  unidadesGestoras: string[] = [
    '090049', 
    '090028', 
    '090048', 
    '090029', 
    '090047', 
    '090030', 
    '090051', 
    '090031', 
    '090052', 
    '090027'
  ];
  
  statusSelecionado: string = 'todas';
  planoTipoSelecionado: string = 'pct';
  unidadeGestoraSelecionada: string = '090049';
  planoAnoMes: string;
  fases: FaseWS[] = [];

  constructor(
    private consultaFaseService: ConsultaFaseService,
    private globalMessageService: GlobalMessageService) {

  }

  ngOnInit(): void {
      // this.globalMessageService.hideMessage({}) TODO esconder mensagem global
  }

  getFases() {
    this.consultaFaseService.getFase(
      this.statusSelecionado, 
      this.unidadeGestoraSelecionada,
      this.planoTipoSelecionado,
      this.planoAnoMes.replaceAll('/', '')).subscribe({
        next: response => {
          this.fases = response.result
          if (!this.fases.length) {
            this.globalMessageService.displayMessage({
              text: 'Nenhuma fase encontrada',
              icon: 'info',
              type: 'info'
            })
          }
        },
        error: error => {
          this.globalMessageService.displayMessage({
            text: error.message,
            icon: 'error',
            type: 'danger'
          });
          this.fases = [];
        },
        complete: () => this.loading = false
      })
  }
}
