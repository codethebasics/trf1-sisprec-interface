import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new Subject<boolean>();

  loading$ = this.loadingSubject.asObservable();

  showLoadingStatusBar() {
    this.loadingSubject.next(true);
  }

  hideLoadingStatusBar() {
    this.loadingSubject.next(false);
  }
}
