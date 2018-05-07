import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { AuthService } from '../auth/auth.service'
import { environment } from '../../environments/environment'

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient, private auth: AuthService) {}

  static handleHttpError(error: HttpErrorResponse) {
    if (error.status === 401) {
      console.error('Unauthorized') // TODO: Redirect to login
    }
  }

  private headers(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization',
      this.auth.getAuthorizationHeader()
    )
  }

  private fullUrl(url: string): string {
    return `${environment.apiUrl}/${url}/`
  }

  get<T>(url: string): Observable<T> {
    return this._http.get<T>(this.fullUrl(url), { headers: this.headers() })
  }

  post<T>(url: string, data: any): Observable<T> {
    return this._http.post<T>(this.fullUrl(url), data, {
      headers: this.headers()
    })
  }
}
