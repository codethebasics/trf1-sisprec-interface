import { Component, Output, EventEmitter } from '@angular/core';
import { Breadcrumb } from '../breadcrumb/breadcrumb';
import { fadeInAnimation, fadeOutAnimation, slideInAnimation } from '../../shared/animations/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation, slideInAnimation],
})
export class SidebarComponent {

  @Output() changeRouteEvent: EventEmitter<Breadcrumb[]> = new EventEmitter<Breadcrumb[]>();

  showChangelog: boolean = false;

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
      case 'importacao': this.changeRouteEvent.emit([
        { path: '/', label: 'Início' }, 
        { path: '/importacao', label: 'Importação' }
      ]); break;
      default: this.changeRouteEvent.emit([
        { path: '/', label: 'Início' }
      ]); break;
    }
  }

  displayChangelog() {
    this.showChangelog = true;
  }

  closeEventHandler(event: any) {
    this.showChangelog = event;
  }
}
