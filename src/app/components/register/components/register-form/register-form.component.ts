import { Component, EventEmitter, Output, Input } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { User } from '../../../../models/index'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  public registerForm: FormGroup

  @Output() public createUserButton = new EventEmitter<User>()
  @Input() public formError: string

  constructor(private _formBuilder: FormBuilder) {
    this.formGenerate()
  }

  formGenerate(): void {
    this.registerForm = this._formBuilder.group({
      username: ['', Validators.required],
      password1: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    })
  }

  addNewUser(): void {
    let newUser = this.registerForm.value as User
    newUser.password2 = newUser.password1
    this.createUserButton.emit(newUser)
  }
}
