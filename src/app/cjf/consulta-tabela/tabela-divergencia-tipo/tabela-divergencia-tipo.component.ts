import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-divergencia-tipo',
  templateUrl: './tabela-divergencia-tipo.component.html',
  styleUrls: ['./tabela-divergencia-tipo.component.scss']
})
export class TabelaDivergenciaTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasDivergenciaTipo;
  }

}
