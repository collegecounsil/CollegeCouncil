import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { catchError, finalize, map } from 'rxjs/operators';
import { LoaderService } from '../_components/loader/loader.service';

@Injectable()
export class HttpService implements HttpInterceptor {
  requestCalls: number;
  constructor(private loaderService: LoaderService) {
    this.requestCalls = 0;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requestCalls++;
    this.showLoader();
    return next.handle(request).pipe(map(event => {
      return event;
    }),
      catchError(error => {
        return Observable.throw(error);
      }),
      finalize(() => {
        this.requestCalls--;
        this.hideLoader();
      })
    );
  }
  private showLoader(): void {
    this.loaderService.showLoader();
  }

  private hideLoader(): void {
    setTimeout(() => {
      this.loaderService.hideLoader();
    }, 100);
  }
}
