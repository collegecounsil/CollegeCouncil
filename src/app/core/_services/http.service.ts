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
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpService implements HttpInterceptor {
  requestCalls: number;
  apiUrl = environment.apiUrl;
  constructor(private loaderService: LoaderService) {
    this.requestCalls = 0;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requestCalls++;
    this.showLoader();
    // const apiRequest = request.clone({ url: `http://13.127.130.44/CollegeCouncil/${request.url}`});
    //  const apiRequest = request.clone({ url: this.apiUrl +`CollegeCouncil/${request.url}`});
    const apiRequest = request.clone({ url: `http://localhost:8080/SC/${request.url}`});
    return next.handle(apiRequest).pipe(map(event => {
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
