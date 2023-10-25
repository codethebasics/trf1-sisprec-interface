import { 
  Component, 
  Input, 
  Output, 
  OnInit, 
  OnDestroy, 
  EventEmitter 
} from '@angular/core';

@Component({
  selector: 'Message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {

  @Input() type: string;
  @Input() text: string;
  @Input() icon: string;
  @Input() visible: boolean = true;

  @Output() closeEvent = new EventEmitter<boolean>();

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

  ngOnDestroy(): void {
      
  }

  close() {    
    this.closeEvent.emit(false);
  }
}
