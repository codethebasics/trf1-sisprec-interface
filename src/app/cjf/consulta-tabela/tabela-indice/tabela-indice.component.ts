import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-indice',
  templateUrl: './tabela-indice.component.html',
  styleUrls: ['./tabela-indice.component.scss']
})
export class TabelaIndiceComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasIndice;
  }

}
