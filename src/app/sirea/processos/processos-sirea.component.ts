import { Component, OnInit } from '@angular/core';
import { ProcessosService } from '../processos.service';

@Component({
  selector: 'ProcessosSirea',
  templateUrl: './processos-sirea.component.html',
  styleUrls: ['./processos-sirea.component.scss']
})
export class ProcessosSireaComponent implements OnInit {

  id: string = '';
  num: string = '';
  cpfCnpj: string = '';

  public constructor(private processosService: ProcessosService) {

  }

  ngOnInit(): void {
      this.processosService.consultar()
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
          complete: () => console.log('complete')
        });
  }

  consultar() {
    this.processosService.consultar()
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
        complete: () => console.log('complete')
      });
  }

  consultarById() {
    console.log('consultando pelo id', this.id);
    if (this.id) {
      this.processosService.consultarById(this.id)
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
          complete: () => console.log('complete')
        });
    }
  }

  consultarByNum() {
    if (this.num) {
      this.processosService.consultarByNum(this.num)
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
          complete: () => console.log('complete')
        });
    }
  }

  consultarByCpfCnpj() {
    if (this.cpfCnpj) {
      this.processosService.consultarByCpfCnpj(this.cpfCnpj)
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
          complete: () => console.log('complete')
        })
    }
  }


}
