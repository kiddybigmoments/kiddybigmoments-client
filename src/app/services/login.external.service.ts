import { Injectable } from '@angular/core'
/*import { Http, Response, Headers } from '@angular/http';*/
import { AuthService } from './auth.service'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map'
import '../components/interfaces/login.response.interfaz'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { LoginForm } from '../components/login/loginform.model'

@Injectable()
export class LoginExternalService {
  constructor(private _http: HttpClient, private authService: AuthService) {}
  formulario = new LoginForm()

  private acceso = new Subject<LoginForm>()

  // Metodo de login de la aplicacion
  login(user: string, pass: string): Observable<LoginForm> {
    this.formulario.user = user
    this.formulario.pass = pass
    const req = this._http.post<LoginResponse>(
      `${environment.apiUrl}/get-token/`,
      { username: user, password: pass }
    )
    req.subscribe(
      res => {
        this.formulario.authToken = 'Bearer ' + res.token

        this.acceso.next(this.formulario)
        this.authService.actualizarAutorizacion(
          this.formulario.user,
          this.formulario.pass,
          this.formulario.authToken
        )
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.')
        } else {
          console.log('Server-side error occured.')
        }
      }
    )
    return this.acceso.asObservable()
  }

  getAuthorizationHeader() {
    return this.formulario.authToken
  }
}
