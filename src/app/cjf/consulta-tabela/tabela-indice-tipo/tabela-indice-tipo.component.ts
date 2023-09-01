import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-indice-tipo',
  templateUrl: './tabela-indice-tipo.component.html',
  styleUrls: ['./tabela-indice-tipo.component.scss']
})
export class TabelaIndiceTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasIndiceTipo;
  }
  
}
