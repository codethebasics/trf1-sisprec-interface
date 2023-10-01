import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-assunto-detalhe',
  templateUrl: './tabela-assunto-detalhe.component.html',
  styleUrls: ['./tabela-assunto-detalhe.component.scss']
})
export class TabelaAssuntoDetalheComponent implements OnInit {

  ngOnInit(): void {
      console.log('detalhe tabela');
  }
}
