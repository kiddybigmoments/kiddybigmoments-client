import { Component } from '@angular/core'
import { Kid } from '../../models/index'
import { Router } from '@angular/router'
import { AddKidFormService } from '../add-kid/services/add-kid-form.service'

@Component({
  selector: 'app-add-kid-url',
  templateUrl: './add-kid-url.component.html',
  styleUrls: ['./add-kid-url.component.css']
})
export class AddKidUrlComponent {
  constructor(
    private _addKidFormService: AddKidFormService,
    private _router: Router
  ) {}

  createNewKid(kid: Kid): void {
    this._addKidFormService.addKid(kid).subscribe(
      response => {
        this._router.navigate(['/add-kid'])
      },
      error => {
        console.log(error)
      }
    )
  }
}
