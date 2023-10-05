import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments';
import { SwaggerFaseRetorno } from '../model/swagger-fase-retorno';

/**
 * Serviço de consulta de fase
 * 
 * Realiza consulta junto à API do TRF1-SISPREC
 * 
 * @author bruno.carneiro (tr301605)
 */
@Injectable({
  providedIn: 'root'
})
export class ConsultaFaseService {

  constructor(private http: HttpClient) {

  }

  /**
   * Consulta fase
   */
  getFase(
    fase?: String, 
    unidadeGestoraCodigo?: String, 
    planoTipo?: String, 
    planoAnoMes?: String): Observable<SwaggerFaseRetorno> {
      return this.http.get<SwaggerFaseRetorno>(`${environments.apiUrl}/fase/consultar?abertas-fechadas=${fase}&plano-ano-mes=${planoAnoMes}&plano-prc-rpv=${planoTipo}&ug=${unidadeGestoraCodigo}`);
    }

}
