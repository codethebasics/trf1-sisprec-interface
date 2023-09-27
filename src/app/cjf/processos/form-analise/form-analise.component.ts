import { Component, OnInit } from '@angular/core';
import { ProcessoDTO } from '../../model/dto/processo-dto';

@Component({
  selector: 'app-form-analise',
  templateUrl: './form-analise.component.html',
  styleUrls: ['./form-analise.component.scss']
})
export class FormAnaliseComponent implements OnInit {

  public processo: ProcessoDTO = {};

  constructor() {

  }

  ngOnInit(): void {
      
  }
}
