import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

export interface Processo {
  id: number,
  processo: string;
  numeroRequisicao: string;
  beneficiario: string;
  classe: string;
  tipoRequisicao: string;
}
const PROCESSOS_DATA: Processo[] = [
  {id: 1,  processo: '1002801-53.2022.4.01.3000', numeroRequisicao: '0000001.2023.4.01.004.3000', beneficiario: 'MARIA AUXILIADORA PAIVA SABOIA', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 2,  processo: '1006674-57.2019.4.01.3100', numeroRequisicao: '0000001.2022.4.01.003.3100', beneficiario: 'ELAINE MARIA PENA DOS SANTOS ROCHA', classe: 'PRECATORIO', tipoRequisicao: 'Geral'},
  {id: 3,  processo: '1001988-51.2021.4.01.3100', numeroRequisicao: '0000002.2022.4.01.003.3100', beneficiario: 'DARCLEY CABRAL DOS SANTOS', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 4,  processo: '1001523-08.2022.4.01.3100', numeroRequisicao: '0000003.2022.4.01.003.3100', beneficiario: 'MANOEL ROSENO JESUS DOS REIS', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 5,  processo: '1007258-90.2020.4.01.3100', numeroRequisicao: '0000004.2022.4.01.003.3100', beneficiario: 'JOSE CAUBI DE OLIVEIRA NEGRAO', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 6,  processo: '1004394-11.2022.4.01.3100', numeroRequisicao: '0000005.2022.4.01.003.3100', beneficiario: 'EDINALDO ALVES DE ALMEIDA', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 7,  processo: '1003417-19.2022.4.01.3100', numeroRequisicao: '0000006.2022.4.01.003.3100', beneficiario: 'ROSANA LAURENTINO PESSOA', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 8,  processo: '1015996-33.2021.4.01.3100', numeroRequisicao: '0000007.2022.4.01.003.3100', beneficiario: 'GIULIANE PANTOJA NUNES', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 9,  processo: '1003353-77.2020.4.01.3100', numeroRequisicao: '0000008.2022.4.01.003.3100', beneficiario: 'FABRICIO GUEDES LOBATO', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 10, processo: '0006227-23.2018.4.01.3100', numeroRequisicao: '0000009.2022.4.01.003.3100', beneficiario: 'PATRICIA BASTOS DE AGUIAR', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 11,  processo: '1002801-53.2022.4.01.3000', numeroRequisicao: '0000001.2023.4.01.004.3000', beneficiario: 'MARIA AUXILIADORA PAIVA SABOIA', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 12,  processo: '1006674-57.2019.4.01.3100', numeroRequisicao: '0000001.2022.4.01.003.3100', beneficiario: 'ELAINE MARIA PENA DOS SANTOS ROCHA', classe: 'PRECATORIO', tipoRequisicao: 'Geral'},
  {id: 13,  processo: '1001988-51.2021.4.01.3100', numeroRequisicao: '0000002.2022.4.01.003.3100', beneficiario: 'DARCLEY CABRAL DOS SANTOS', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 14,  processo: '1001523-08.2022.4.01.3100', numeroRequisicao: '0000003.2022.4.01.003.3100', beneficiario: 'MANOEL ROSENO JESUS DOS REIS', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 15,  processo: '1007258-90.2020.4.01.3100', numeroRequisicao: '0000004.2022.4.01.003.3100', beneficiario: 'JOSE CAUBI DE OLIVEIRA NEGRAO', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 16,  processo: '1004394-11.2022.4.01.3100', numeroRequisicao: '0000005.2022.4.01.003.3100', beneficiario: 'EDINALDO ALVES DE ALMEIDA', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 17,  processo: '1003417-19.2022.4.01.3100', numeroRequisicao: '0000006.2022.4.01.003.3100', beneficiario: 'ROSANA LAURENTINO PESSOA', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 18,  processo: '1015996-33.2021.4.01.3100', numeroRequisicao: '0000007.2022.4.01.003.3100', beneficiario: 'GIULIANE PANTOJA NUNES', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 19,  processo: '1003353-77.2020.4.01.3100', numeroRequisicao: '0000008.2022.4.01.003.3100', beneficiario: 'FABRICIO GUEDES LOBATO', classe: 'RPV', tipoRequisicao: 'Geral'},
  {id: 20, processo: '0006227-23.2018.4.01.3100', numeroRequisicao: '0000009.2022.4.01.003.3100', beneficiario: 'PATRICIA BASTOS DE AGUIAR', classe: 'RPV', tipoRequisicao: 'Geral'},
];

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit{
  displayedColumns: string[] = [
    'id', 
    'processo', 
    'numeroRequisicao', 
    'beneficiario', 
    'classe', 
    'tipoRequisicao'
  ];
  dataSource = new MatTableDataSource(PROCESSOS_DATA);
  clickedRows = new Set<Processo>();
  selection = new SelectionModel<Processo>(true, []);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  selectRow(row: any) {
    this.clickedRows.add(row);
  }

  isRowSelected(row: any) {
    return this.clickedRows.has(row);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
