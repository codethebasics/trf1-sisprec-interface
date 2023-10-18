import { Component, Input } from '@angular/core';
import { FaseWS } from '../../model/fase-ws';

@Component({
  selector: 'app-fase',
  templateUrl: './fase.component.html',
  styleUrls: ['./fase.component.scss']
})
export class FaseComponent {

  @Input() fase: any;

}
