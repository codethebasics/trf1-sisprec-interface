import { Injectable } from '@angular/core';
import { RequisicaoPagamento } from './types/requisicao-pagamento';


/**
 * Serviço genérico de obtenção de dados a serem apresentados em tela
 * 
 * @author bruno.carneiro (tr301605)
 */
@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  // Colunas a serem apresentadas no header
  private _displayedColumns: string[];

  constructor() {

  }

  /**
   * Mock de dados trazidos do backend para apresentação
   */
  list() {
    return new Promise<RequisicaoPagamento[]>((resolve, reject) => {
      resolve(
        [
          {
            id: 1,
            processo: '1002801-53.2022.4.01.3000',
            numeroRequisicao: '0000001.2023.4.01.004.3000',
            beneficiario: 'MARIA AUXILIADORA PAIVA SABOIA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 2,
            processo: '1006674-57.2019.4.01.3100',
            numeroRequisicao: '0000001.2022.4.01.003.3100',
            beneficiario: 'ELAINE MARIA PENA DOS SANTOS ROCHA',
            classe: 'PRECATORIO',
            tipoRequisicao: 'Geral'
          },
          {
            id: 3,
            processo: '1001988-51.2021.4.01.3100',
            numeroRequisicao: '0000002.2022.4.01.003.3100',
            beneficiario: 'DARCLEY CABRAL DOS SANTOS',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 4,
            processo: '1001523-08.2022.4.01.3100',
            numeroRequisicao: '0000003.2022.4.01.003.3100',
            beneficiario: 'MANOEL ROSENO JESUS DOS REIS',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 5,
            processo: '1007258-90.2020.4.01.3100',
            numeroRequisicao: '0000004.2022.4.01.003.3100',
            beneficiario: 'JOSE CAUBI DE OLIVEIRA NEGRAO',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 6,
            processo: '1004394-11.2022.4.01.3100',
            numeroRequisicao: '0000005.2022.4.01.003.3100',
            beneficiario: 'EDINALDO ALVES DE ALMEIDA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 7,
            processo: '1003417-19.2022.4.01.3100',
            numeroRequisicao: '0000006.2022.4.01.003.3100',
            beneficiario: 'ROSANA LAURENTINO PESSOA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 8,
            processo: '1015996-33.2021.4.01.3100',
            numeroRequisicao: '0000007.2022.4.01.003.3100',
            beneficiario: 'GIULIANE PANTOJA NUNES',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 9,
            processo: '1003353-77.2020.4.01.3100',
            numeroRequisicao: '0000008.2022.4.01.003.3100',
            beneficiario: 'FABRICIO GUEDES LOBATO',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 10,
            processo: '0006227-23.2018.4.01.3100',
            numeroRequisicao: '0000009.2022.4.01.003.3100',
            beneficiario: 'PATRICIA BASTOS DE AGUIAR',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 11,
            processo: '1002801-53.2022.4.01.3000',
            numeroRequisicao: '0000001.2023.4.01.004.3000',
            beneficiario: 'MARIA AUXILIADORA PAIVA SABOIA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 12,
            processo: '1006674-57.2019.4.01.3100',
            numeroRequisicao: '0000001.2022.4.01.003.3100',
            beneficiario: 'ELAINE MARIA PENA DOS SANTOS ROCHA',
            classe: 'PRECATORIO',
            tipoRequisicao: 'Geral'
          },
          {
            id: 13,
            processo: '1001988-51.2021.4.01.3100',
            numeroRequisicao: '0000002.2022.4.01.003.3100',
            beneficiario: 'DARCLEY CABRAL DOS SANTOS',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 14,
            processo: '1001523-08.2022.4.01.3100',
            numeroRequisicao: '0000003.2022.4.01.003.3100',
            beneficiario: 'MANOEL ROSENO JESUS DOS REIS',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 15,
            processo: '1007258-90.2020.4.01.3100',
            numeroRequisicao: '0000004.2022.4.01.003.3100',
            beneficiario: 'JOSE CAUBI DE OLIVEIRA NEGRAO',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 16,
            processo: '1004394-11.2022.4.01.3100',
            numeroRequisicao: '0000005.2022.4.01.003.3100',
            beneficiario: 'EDINALDO ALVES DE ALMEIDA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 17,
            processo: '1003417-19.2022.4.01.3100',
            numeroRequisicao: '0000006.2022.4.01.003.3100',
            beneficiario: 'ROSANA LAURENTINO PESSOA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 18,
            processo: '1015996-33.2021.4.01.3100',
            numeroRequisicao: '0000007.2022.4.01.003.3100',
            beneficiario: 'GIULIANE PANTOJA NUNES',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 19,
            processo: '1003353-77.2020.4.01.3100',
            numeroRequisicao: '0000008.2022.4.01.003.3100',
            beneficiario: 'FABRICIO GUEDES LOBATO',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 20,
            processo: '0006227-23.2018.4.01.3100',
            numeroRequisicao: '0000009.2022.4.01.003.3100',
            beneficiario: 'PATRICIA BASTOS DE AGUIAR',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 21,
            processo: '1002801-53.2022.4.01.3000',
            numeroRequisicao: '0000001.2023.4.01.004.3000',
            beneficiario: 'MARIA AUXILIADORA PAIVA SABOIA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 22,
            processo: '1006674-57.2019.4.01.3100',
            numeroRequisicao: '0000001.2022.4.01.003.3100',
            beneficiario: 'ELAINE MARIA PENA DOS SANTOS ROCHA',
            classe: 'PRECATORIO',
            tipoRequisicao: 'Geral'
          },
          {
            id: 23,
            processo: '1001988-51.2021.4.01.3100',
            numeroRequisicao: '0000002.2022.4.01.003.3100',
            beneficiario: 'DARCLEY CABRAL DOS SANTOS',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 24,
            processo: '1001523-08.2022.4.01.3100',
            numeroRequisicao: '0000003.2022.4.01.003.3100',
            beneficiario: 'MANOEL ROSENO JESUS DOS REIS',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 25,
            processo: '1007258-90.2020.4.01.3100',
            numeroRequisicao: '0000004.2022.4.01.003.3100',
            beneficiario: 'JOSE CAUBI DE OLIVEIRA NEGRAO',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 26,
            processo: '1004394-11.2022.4.01.3100',
            numeroRequisicao: '0000005.2022.4.01.003.3100',
            beneficiario: 'EDINALDO ALVES DE ALMEIDA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 27,
            processo: '1003417-19.2022.4.01.3100',
            numeroRequisicao: '0000006.2022.4.01.003.3100',
            beneficiario: 'ROSANA LAURENTINO PESSOA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 28,
            processo: '1015996-33.2021.4.01.3100',
            numeroRequisicao: '0000007.2022.4.01.003.3100',
            beneficiario: 'GIULIANE PANTOJA NUNES',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 29,
            processo: '1003353-77.2020.4.01.3100',
            numeroRequisicao: '0000008.2022.4.01.003.3100',
            beneficiario: 'FABRICIO GUEDES LOBATO',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 30,
            processo: '0006227-23.2018.4.01.3100',
            numeroRequisicao: '0000009.2022.4.01.003.3100',
            beneficiario: 'PATRICIA BASTOS DE AGUIAR',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 31,
            processo: '1002801-53.2022.4.01.3000',
            numeroRequisicao: '0000001.2023.4.01.004.3000',
            beneficiario: 'MARIA AUXILIADORA PAIVA SABOIA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 32,
            processo: '1006674-57.2019.4.01.3100',
            numeroRequisicao: '0000001.2022.4.01.003.3100',
            beneficiario: 'ELAINE MARIA PENA DOS SANTOS ROCHA',
            classe: 'PRECATORIO',
            tipoRequisicao: 'Geral'
          },
          {
            id: 33,
            processo: '1001988-51.2021.4.01.3100',
            numeroRequisicao: '0000002.2022.4.01.003.3100',
            beneficiario: 'DARCLEY CABRAL DOS SANTOS',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 34,
            processo: '1001523-08.2022.4.01.3100',
            numeroRequisicao: '0000003.2022.4.01.003.3100',
            beneficiario: 'MANOEL ROSENO JESUS DOS REIS',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 35,
            processo: '1007258-90.2020.4.01.3100',
            numeroRequisicao: '0000004.2022.4.01.003.3100',
            beneficiario: 'JOSE CAUBI DE OLIVEIRA NEGRAO',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 36,
            processo: '1004394-11.2022.4.01.3100',
            numeroRequisicao: '0000005.2022.4.01.003.3100',
            beneficiario: 'EDINALDO ALVES DE ALMEIDA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 37,
            processo: '1003417-19.2022.4.01.3100',
            numeroRequisicao: '0000006.2022.4.01.003.3100',
            beneficiario: 'ROSANA LAURENTINO PESSOA',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 38,
            processo: '1015996-33.2021.4.01.3100',
            numeroRequisicao: '0000007.2022.4.01.003.3100',
            beneficiario: 'GIULIANE PANTOJA NUNES',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 39,
            processo: '1003353-77.2020.4.01.3100',
            numeroRequisicao: '0000008.2022.4.01.003.3100',
            beneficiario: 'FABRICIO GUEDES LOBATO',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
          {
            id: 40,
            processo: '0006227-23.2018.4.01.3100',
            numeroRequisicao: '0000009.2022.4.01.003.3100',
            beneficiario: 'PATRICIA BASTOS DE AGUIAR',
            classe: 'RPV',
            tipoRequisicao: 'Geral'
          },
      ]
      );
    })
  }

  /**
   * GETTERS / SETTERS
   */

  set displayedColumns(displayedColumns: string[]) {
    this._displayedColumns = displayedColumns;
  }

  get displayedColumns() {
    return this._displayedColumns;
  }
}
