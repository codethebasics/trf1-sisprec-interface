import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessoWS } from '../model/processo-ws'
import { environments } from 'src/environments';
import { Observable } from 'rxjs';
import Util from '../../shared/util';

/**
 * Serviço responsável pela integração com a API de processos
 * 
 * @author bruno.carneiro (tr301605)
 */
@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  constructor(private http: HttpClient) {

  }

  /**
   * Consulta um processo pelo número e unidade gestora
   * 
   * @param processoNumero 
   * @param unidadeGestoraCodigo 
   * @returns 
   */
  getProcesso(processoNumero: string, unidadeGestoraCodigo: string): Observable<any> {
    const sanitizedProcesso = Util.stripProcesso(processoNumero);
    return this.http.get(`${environments.apiUrl}/processo/${sanitizedProcesso}/ug/${unidadeGestoraCodigo}`)
  }

  /**
   * Analisa dados de uma lista de processos
   * 
   * @param unidadeGestoraCodigo 
   * @param planoTipo 
   * @param processos 
   * @returns 
   */
  postProcessoAnalise(
    unidadeGestoraCodigo: string, 
    planoTipo: string,
    processos: ProcessoWS[]): Observable<any> {
      return this.http.post(`${environments.apiUrl}/processo/analise/ug/${unidadeGestoraCodigo}/plano/${planoTipo}`, processos);
  }

  /**
   * Solicita o cadastro de um processo
   * 
   * @param unidadeGestoracodigo 
   * @param planoTipo 
   * @param planoAnoMes 
   * @param faseAnoMes 
   * @param processos 
   * @returns 
   */
  postProcesso(
    unidadeGestoraCodigo: String, 
    planoTipo: string, 
    planoAnoMes: string, 
    faseAnoMes:string,
    processos: ProcessoWS[]): Observable<any> {
      return this.http.post(`${environments.apiUrl}/processo/ug/${unidadeGestoraCodigo}/plano/${planoTipo}/${planoAnoMes}/fase/${faseAnoMes}`, processos);
  }

  /**
   * Solicita a remoção de um processo
   * 
   * @param unidadeGestoracodigo
   * @param planoTipo 
   * @param planoAnoMes 
   * @param faseAnoMes 
   * @param processoNumero 
   */
  deleteProcesso(
    unidadeGestoraCodigo: String, 
    planoTipo: string, 
    planoAnoMes: string, 
    faseAnoMes:string,
    processoNumero: string
  ) {
    return this.http.delete(`${environments.apiUrl}/processo/${processoNumero}/ug/${unidadeGestoraCodigo}/plano/${planoTipo}/${planoAnoMes}/fase/${faseAnoMes}`);
  }

  /**
   * Solicita a alteração de um processo
   * 
   * @param processo
   * @param planoTipo 
   * @param planoAnoMes 
   * @param faseAnoMesString 
   * @returns 
   */
  patchProcesso(
    unidadeGestoraCodigo: string,
    processo: ProcessoWS,
    planoTipo: string,
    planoAnoMes: string,
    faseAnoMes: string): Observable<any> {
      return this.http.patch(`${environments.apiUrl}/processo/ug/${unidadeGestoraCodigo}/plano/${planoTipo}/${planoAnoMes}/fase/${faseAnoMes}`, processo);
  }

}
