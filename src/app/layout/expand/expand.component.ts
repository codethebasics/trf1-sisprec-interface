import { Component, Input } from '@angular/core';

@Component({
  selector: 'Expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss']
})
export class ExpandComponent {

  @Input() title: string;
  @Input() description: string;

}
