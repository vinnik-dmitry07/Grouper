import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      headers:
        req.headers
          .set('Content-Type', 'application/json')
          .set('Authorization', 'Bearer ' + localStorage.getItem(environment.tokenKey))
    });
    return next.handle(clonedRequest);
  }
}
