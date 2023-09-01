import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() colunas: string[] = [];
  @Input() dados: any[] = [];

  dataSource: any = undefined;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dados);
      
  }
}
