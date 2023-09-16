import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() type: string;
  @Input() text: string;
  @Input() icon: string;

  classType: string

  ngOnInit(): void {
      switch (this.type) {
        case 'info': this.classType = 'c-message--info'; break;
        case 'success': this.classType = 'c-message--success'; break;
        case 'warn': this.classType = 'c-message--warn'; break;
        case 'danger': this.classType = 'c-message--danger'; break;
        default: this.classType = 'c-message--info';
      }
  }
}
