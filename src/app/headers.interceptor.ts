import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'X-RapidAPI-Key': 'b4f553c90bmsh592dd8c5885875bp1302a8jsn581b3431b255',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    })
    return next.handle(request);
  }
}
