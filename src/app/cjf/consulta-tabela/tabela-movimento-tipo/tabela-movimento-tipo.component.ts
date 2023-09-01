import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-movimento-tipo',
  templateUrl: './tabela-movimento-tipo.component.html',
  styleUrls: ['./tabela-movimento-tipo.component.scss']
})
export class TabelaMovimentoTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasMovimentoTipo;
  }

}
