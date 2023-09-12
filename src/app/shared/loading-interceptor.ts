
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
  } from '@angular/common/http';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private loadingService: LoadingService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.showLoadingStatusBar();
        return next.handle(request)
            .pipe(finalize(() => {
                this.loadingService.hideLoadingStatusBar();
            })
        );
    }
}
