import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-fase-tipo',
  templateUrl: './tabela-fase-tipo.component.html',
  styleUrls: ['./tabela-fase-tipo.component.scss']
})
export class TabelaFaseTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasFaseTipo;
  }
  
}
