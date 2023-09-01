import { Component } from '@angular/core';
import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-sentenca-tipo',
  templateUrl: './tabela-sentenca-tipo.component.html',
  styleUrls: ['./tabela-sentenca-tipo.component.scss']
})
export class TabelaSentencaTipoComponent {

  dados: any[] = [];
  colunas: string[] = [];

  ngOnInit(): void {
    this.colunas = Colunas.colunasSentencaTipo;
  }
  
}
