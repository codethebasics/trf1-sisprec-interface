import { Component, OnInit } from '@angular/core';
import { FetchdataService } from './fetchdata.service';

/**
 * Componente inicial da aplicação
 * 
 * @author bruno.carneiro (tr301605)
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'trf1-sisprec';
  
  // Armazena os dados a serem apresentados na tabela
  data: any[];

  constructor(private _fetchDataService: FetchdataService) {

  }

  ngOnInit(): void {
    this.fetchData();
  }

  /**
   * O serviço dispara uma requisição para obter os dados a serem apresentados
   */
  fetchData() {
    this._fetchDataService.list()
      .then(response => this.data = response)
      .catch(error => console.error('Houve um erro durante a listagem dos dados', error));
  }
}
