import { Component, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Kid } from '../../../../models/index'

@Component({
  selector: 'app-add-kid-form',
  templateUrl: './add-kid-form.component.html',
  styleUrls: ['./add-kid-form.component.css']
})
export class AddKidFormComponent {
  public newKidForm: FormGroup

  @Output() public createKidButton = new EventEmitter<Kid>()

  constructor(private _formBuilder: FormBuilder) {
    this.formGenerate()
  }

  formGenerate(): void {
    this.newKidForm = this._formBuilder.group({
      name: ['', Validators.required]
    })
  }

  addNewKid(): void {
    let newKid = this.newKidForm.value as Kid
    this.createKidButton.emit(newKid)
  }
}
