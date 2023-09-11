import { Component, ViewEncapsulation } from '@angular/core';
import { ConsultaFaseService } from './consulta-fase.service';
import { FaseWS } from '../model/fase-ws';

@Component({
  selector: 'app-consulta-fase',
  templateUrl: './consulta-fase.component.html',
  styleUrls: ['./consulta-fase.component.scss']
})
export class ConsultaFaseComponent {

  loading: boolean = false;
  mask = [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/];

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

  constructor(private consultaFaseService: ConsultaFaseService) {

  }

  getFases() {
    this.consultaFaseService.getFase(
      this.statusSelecionado, 
      this.unidadeGestoraSelecionada,
      this.planoTipoSelecionado,
      this.planoAnoMes.replaceAll('/', '')).subscribe({
        next: response => this.fases = response.retorno,
        error: error => console.log(error),
        complete: () => this.loading = false
      })
  }
}
