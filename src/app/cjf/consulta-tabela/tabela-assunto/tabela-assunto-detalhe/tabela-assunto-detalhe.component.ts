import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaTabelaService } from '../../consulta-tabela.service';

@Component({
  selector: 'app-tabela-assunto-detalhe',
  templateUrl: './tabela-assunto-detalhe.component.html',
  styleUrls: ['./tabela-assunto-detalhe.component.scss']
})
export class TabelaAssuntoDetalheComponent implements OnInit {

  constructor(private route: ActivatedRoute, private consultaTabelaService: ConsultaTabelaService) {

  }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        const cod = +params['cod'];
        console.log('código', cod);
      });
  }
}
