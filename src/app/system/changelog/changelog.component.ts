import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { fadeInAnimation, slideInAnimation } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  animations: [fadeInAnimation, slideInAnimation]
})
export class ChangelogComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<boolean>();
  changes: any[] = [];

  ngOnInit(): void {
      this.changes = [
        { 
          version: 'v1.2', 
          date: '01/10/2023',
          features: [
            { name: 'Tela consulta de tabelas', description: 'Tela de integração com a API de consulta de tabelas' },
            { name: 'Tela consulta de fases', description: 'Tela de integração com a API de consulta de fases' },
            { name: 'Tela de processos', description: 'Tela de integração com a API de processos' }
          ]
        },
        { 
          version: 'v1.0', 
          date: '01/09/2023',
          features: [
            { name: 'Layout', description: 'Estruturação do layout do sistema' },
            { name: 'Integração', description: 'Integrações com a API do CJF' },
          ]
        },
      ];
  }

  triggerCloseEvent() {
    this.closeEvent.emit(false);
  }
}
