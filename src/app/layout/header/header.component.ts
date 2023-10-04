import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/shared/loading.service';
import { FetchdataService } from '../../fetchdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  username: string = 'Bruno Carneiro'; // TODO: obter da token JWT
  computedName: string;
  loading: boolean = false;
  isLoading: boolean = false;

  // Armazena os dados a serem apresentados na tabela
  data: any[];

  private loadingSubscription: Subscription;

  constructor(
    private _fetchDataService: FetchdataService, 
    private loadingService: LoadingService) {

  }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.loading$
      .subscribe(isLoading => this.isLoading = isLoading);
    this.fetchData();
    this.getComputedName();
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  /**
   * O serviço dispara uma requisição para obter os dados a serem apresentados
   */
  fetchData() {
    this._fetchDataService.list()
      .then(response => this.data = response)
      .catch(error => console.error('Houve um erro durante a listagem dos dados', error));
  }

  /**
   * Obtém o nome do usuário logado e retorna apenas o primeiro e último nome
   */
  getComputedName() {
    const arrayName = this.username.split(" ");
    this.computedName = arrayName[0] + ' ' + arrayName[(arrayName.length - 1)];
  }

}
