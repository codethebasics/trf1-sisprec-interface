import { Component, ViewChild, Input } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { BeneficiarioValorOrdemPagamentoWS } from '../../model/beneficiario-valor-ordem-pagamento-ws';

import * as Colunas from '../tabela-colunas'

@Component({
  selector: 'app-tabela-beneficiario-valor-ordem-pagamento',
  templateUrl: './tabela-beneficiario-valor-ordem-pagamento.component.html',
  styleUrls: ['./tabela-beneficiario-valor-ordem-pagamento.component.scss']
})
export class TabelaBeneficiarioValorOrdemPagamentoComponent {

  // Colunas da tabela
  @Input() headerColumns: string[];

  // Linhas da tabela
  @Input() tableData: any[];

  // Fonte de dados a serem apresentados
  dataSource: MatTableDataSource<any, any>;
  clickedRows = new Set<BeneficiarioValorOrdemPagamentoWS>();
  selection = new SelectionModel<BeneficiarioValorOrdemPagamentoWS>(true, []);

  // Armazena todas as requisições que foram alteradas em tela
  private requisicoesAlteradas: BeneficiarioValorOrdemPagamentoWS[] = [];

  // Armazena o backup de todas as requisições alteradas
  private requisicoesBackup: BeneficiarioValorOrdemPagamentoWS[] = [];

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.headerColumns = Colunas.colunasBeneficiarioValorOrdemPagamento107ATipo;
    this.headerColumns.unshift('select');
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {    
    // Ao iniciar a aplicação, atribuímos os dados recebidos na tabela
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
    // Depois que a view for carregada, aplicamos a paginação e ordenação
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Muda a ordenação das colunas
   */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  /**
   * Verifica se todos as linhas da tabela apresentadas
   * em tela estão selecionadas
   * 
   * @return true se todas as linhas estiverem selecionadas
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * Seleciona todas as linhas da tabela apresentadas em tela
   */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /**
   * Obtém a quantidade de linhas selecionadas
   */
  selectedRows() {
    return this.selection.selected.length;
  }

  /**
   * Verifica se a tabela contém algum registro
   */
  tableHasAnyData() {
    return this.dataSource?.data?.length;
  }

  getIdsSelecionados() {
    this.selection.selected.map(row => console.log(row.id));
  }

}
