import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments';

/**
 * Serviço de processos do SIREA
 * 
 * @author Bruno Carneiro
 */
@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  constructor(private http: HttpClient) {

  }

  consultar(page: number = 1, size: number = 10) {
    return this.http.get(`${environments.apiSireaUrl}/processos?page=${page}&size=${size}`);
  }
  
  consultarById(id: string, page: number = 1, size: number = 10) {
    return this.http.get(`${environments.apiSireaUrl}/processo?id=${id}&page=${page}&size=${size}`);
  }
  
  consultarByNum(num: string, page: number = 1, size: number = 10) {
    return this.http.get(`${environments.apiSireaUrl}/processo?num=${num}&page=${page}&size=${size}`);
  }
  
  consultarByCpfCnpj(cpfCnpj: string, page: number = 1, size: number = 10) {
    return this.http.get(`${environments.apiSireaUrl}/processo?cpfCnpj=${cpfCnpj}&page=${page}&size=${size}`);
  }
  
  atualizarProcesso(processo: any) {
    return this.http.put(`${environments.apiSireaUrl}/processo`, processo);
  }
}
