import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { fadeInAnimation, slideInAnimation } from 'src/app/shared/animations/animations';
import { ChangelogService } from './changelog.service';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  animations: [fadeInAnimation, slideInAnimation]
})
export class ChangelogComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<boolean>();
  changes: any[] = [];

  constructor(private changelogService: ChangelogService) {

  }

  ngOnInit(): void {
      this.changes = this.changelogService.getChangelogHistory();
  }

  triggerCloseEvent() {
    this.closeEvent.emit(false);
  }
}
