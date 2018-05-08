import { Injectable } from '@angular/core'
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http'
import 'rxjs/add/operator/do'
import { Observable } from 'rxjs/Observable'
import { HttpResponse } from '@angular/common/http'
import { AuthService } from '../../services/auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authHeader = this.auth.getAuthorizationHeader()

    if (typeof authHeader === 'undefined') {
      return next.handle(req)
    } else {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authHeader)
      })
      return next.handle(authReq).do(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('HTTP Rest OK')
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status % 100 !== 2) {
              console.error(
                'Error HTTP REST, code: ' +
                  err.status +
                  ' , Text: ' +
                  JSON.stringify(err)
              )
            }
          }
        }
      )
    }
  }
}
