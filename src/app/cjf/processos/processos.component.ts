import { Component, OnInit } from '@angular/core';
import Util from 'src/app/shared/util';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {

  loading: boolean = false;
  unidadesGestoras: string[];
  unidadeGestoraSelecionada: string = '090049';
  processo: string;
  maskProcesso: any[];
  maskPlanoAnoMes: any[];

  viewSelect = 'consultar';

  processos: [
    {
      codigo: number,
      contexto: string,
      motivo: string
    }
  ];

  planosTipo = ['pct', 'rpv'];
  planoTipoSelecionado: string = 'pct';
  planoAnoMes: string;
  faseAnoMes: string;

  constructor() {

  }

  ngOnInit(): void {
    this.maskProcesso = Util.getProcessoMask();
    this.maskPlanoAnoMes = Util.getPlanoAnoMesMask();
    this.unidadesGestoras = Util.getUnidadesGestoras();
  }

  getProcesso() {
    if (this.processo) {
      console.log('get processo', Util.stripProcesso(this.processo));
    }
  }
  
  setView(view: string) {
    this.viewSelect = view.trim();
  }
}
