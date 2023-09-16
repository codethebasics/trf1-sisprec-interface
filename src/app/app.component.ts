import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchdataService } from './fetchdata.service';
import { Subscription, Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/loading.service';
import { Breadcrumb } from './layout/breadcrumb/breadcrumb';

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
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'trf1-sisprec';

  breadcrumbs: Breadcrumb[] = [
    {
      path: '/',
      label: 'Início'
    }
  ];

  // Armazena estado de loading
  loading: boolean = false;
  
  // Armazena os dados a serem apresentados na tabela
  data: any[];

  isLoading: boolean = false;
  
  private loadingSubscription: Subscription;

  constructor(private _fetchDataService: FetchdataService, private loadingService: LoadingService) {

  }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.loading$
      .subscribe(isLoading => this.isLoading = isLoading);
    this.fetchData();
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

  setBreadcrumb(evt: any) {
    this.breadcrumbs = evt;
  }
  
}
