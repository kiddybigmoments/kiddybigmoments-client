import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {LoginForm} from '../login/loginform.model';

@Injectable()
export class AuthService {

  constructor() { }
   formulario = new LoginForm();

   private acceso = new Subject<LoginForm>();


  public actualizarAutorizacion(user: string, pass: string, token: string): Observable<LoginForm>  {
    this.formulario.user = user;
    this.formulario.pass = pass;
    this.formulario.authToken = token;
    return this.acceso.asObservable();
  }

getAuthorizationHeader() {
      return this.formulario.authToken;
}

}

