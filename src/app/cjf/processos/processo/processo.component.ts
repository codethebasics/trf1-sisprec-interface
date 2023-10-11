import { Component, Input } from '@angular/core';
import { ProcessoDTO } from '../../model/dto/processo-dto';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss']
})
export class ProcessoComponent {

  @Input() processo: ProcessoDTO;

  formatNumeroProcesso(): string {
    const part1 = this.processo.processoNumero?.substring(0, 7);
    const part2 = this.processo.processoNumero?.substring(7, 9);
    const part3 = this.processo.processoNumero?.substring(9, 13);
    const part4 = this.processo.processoNumero?.substring(13, 14);
    const part5 = this.processo.processoNumero?.substring(14, 20);
    return `${part1}-${part2}.${part3}.${part4}.${part5}`;
  }

}
