import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-classificacao-despesa',
  templateUrl: './tabela-classificacao-despesa.component.html',
  styleUrls: ['./tabela-classificacao-despesa.component.scss']
})
export class TabelaClassificacaoDespesaComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasClassificacaoDespesa;
  }
  
}
