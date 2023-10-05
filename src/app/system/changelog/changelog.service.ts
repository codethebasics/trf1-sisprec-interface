import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangelogService {

  constructor() {

  }

  getChangelogHistory(): any[] {
    return [
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
}
