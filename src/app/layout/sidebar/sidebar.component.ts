import { Component, Output, EventEmitter } from '@angular/core';
import { Breadcrumb } from '../breadcrumb/breadcrumb';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Output() changeRouteEvent: EventEmitter<Breadcrumb[]> = new EventEmitter<Breadcrumb[]>();

  triggerRouteChangeEvent(path: string) {
    switch (path) {
      case 'consulta-tabela': this.changeRouteEvent.emit([
        { path: '/',label: 'Início'}, 
        { path: '/consulta-tabela', label: 'Consulta tabela'}
      ]); break;
      case 'consulta-fase': this.changeRouteEvent.emit([
        { path: '/',label: 'Início' }, 
        { path: '/consulta-fase', label: 'Consulta fase' }
      ]); break;
      case 'processos': this.changeRouteEvent.emit([
        { path: '/', label: 'Início' }, 
        { path: '/processos', label: 'Processos' }
      ]); break;
      default: this.changeRouteEvent.emit([
        { path: '/', label: 'Início' }
      ]); break;
    }
  }
}
