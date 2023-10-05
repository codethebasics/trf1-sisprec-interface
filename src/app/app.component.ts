import { Component } from '@angular/core';
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
export class AppComponent {
  
  title = 'trf1-sisprec';

  breadcrumbs: Breadcrumb[] = [
    {
      path: '/',
      label: 'Início'
    },
    {
      path: '/consulta-tabela',
      label: 'Consulta tabela'
    }
  ];  

  constructor() {

  }

  setBreadcrumb(evt: any) {
    this.breadcrumbs = evt;
  }
  
}
