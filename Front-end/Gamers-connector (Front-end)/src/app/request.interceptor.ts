import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token =  localStorage.getItem('token');

    if (token) {
      // If a token is present in the local storage, modify the request headers to include the token
      request = request.clone({ headers: request.headers.set('Authorization', token) });
    }

    return next.handle(request);
  }
}
