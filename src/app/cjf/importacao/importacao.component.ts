import { Component } from '@angular/core';

type importacaoRequest = {};

@Component({
  selector: 'app-importacao',
  templateUrl: './importacao.component.html',
  styleUrls: ['./importacao.component.scss']
})
export class ImportacaoComponent {

  maskAno = [/\d/, /\d/, /\d/, /\d/];
  maskMes = [/\d/, /\d/];

  planoTipoSelecionado: string = 'pct';
  faseSelecionada = 'Pagamento';
  naturezaSelecionada = 'Nenhum';
  mesSelecionado = 'Janeiro';

  planosTipo = ['pct', 'rpv'];
  fases = ['Prévia', 'Expedição', 'Pagamento'];
  naturezas = ['Superpreferencial', 'Com saldo devedor', 'Nenhum'];
  meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  ano: number;

  importacaoRequest: ImportacaoComponent;
  
  importar(): void {
    console.log('importando os dados');
  }
}
