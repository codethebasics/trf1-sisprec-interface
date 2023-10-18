import { Component, Input } from '@angular/core';

@Component({
  selector: 'ExpandContent',
  templateUrl: './expand-content.component.html',
  styleUrls: ['./expand-content.component.scss']
})
export class ExpandContentComponent {

  @Input() key: string;
  @Input() value: string;

}
