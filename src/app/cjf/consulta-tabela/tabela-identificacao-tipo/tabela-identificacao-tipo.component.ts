import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-identificacao-tipo',
  templateUrl: './tabela-identificacao-tipo.component.html',
  styleUrls: ['./tabela-identificacao-tipo.component.scss']
})
export class TabelaIdentificacaoTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasIdentificacaoTipo;
  }

}
