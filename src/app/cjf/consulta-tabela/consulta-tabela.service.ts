import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwaggerTabelaRetorno } from '../model/swagger-tabela-retorno';
import { environments } from 'src/environments';
import { Observable } from 'rxjs';

/**
 * Classe responsável pela comunicação com a API de consulta de tabelas
 * 
 * @author bruno.carneiro (tr301605)
 */
@Injectable({
  providedIn: 'root'
})
export class ConsultaTabelaService {

  constructor(private http: HttpClient) { }

  /**
   * Consulta registros de uma tabela
   * 
   * @param tabela 
   * @returns 
   */
  getTabelaItens(tabela?: String): Observable<SwaggerTabelaRetorno> {
    return this.http.get<SwaggerTabelaRetorno>(`${environments.apiUrl}/tabela/consultar?nome-da-tabela=${tabela}`);
  }

  /**
   * Consulta registro de uma tabela pelo código
   * @param tabela 
   * @param codigo 
   * @returns 
   */
  getTabelaItem(tabela?: String, codigo?: String): Observable<SwaggerTabelaRetorno> {
    return this.http.get<SwaggerTabelaRetorno>(`${environments.apiUrl}/tabela/consultar?nome-da-tabela=${tabela}&identificacao-do-registro=${codigo}`);
  }
}
