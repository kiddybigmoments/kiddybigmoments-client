import { Component, OnInit } from '@angular/core'
import { RegisterFormService } from '../register/services/register-form.service'
import { User } from '../../models/index'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-url',
  templateUrl: './register-url.component.html',
  styleUrls: ['./register-url.component.css']
})
export class RegisterUrlComponent {
  public formError: string
  public success: boolean = false

  constructor(
    private _registerFormService: RegisterFormService,
    private _router: Router
  ) {}

  createNewUser(user: User): void {
    this._registerFormService.addUser(user).subscribe(
      response => {
        this.success = true
      },
      error => {
        if (error.error.username) {
          this.formError =
            'El nombre de ususario ya existe en la base de datos.'
        }
        if (error.error.email) {
          this.formError = 'El email que se ha introducido no es válido.'
        }
      }
    )
  }
}
