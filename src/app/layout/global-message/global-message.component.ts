import { Component, Input } from '@angular/core';

@Component({
  selector: 'GlobalMessage',
  templateUrl: './global-message.component.html',
  styleUrls: ['./global-message.component.scss']
})
export class GlobalMessageComponent {

  @Input() type: string;
  @Input() text: string;
  @Input() icon: any;
  
}
