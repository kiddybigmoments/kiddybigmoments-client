import { Component, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Photo } from '../../../../models/index'

@Component({
  selector: 'app-upload-photo-form',
  templateUrl: './upload-photo-form.component.html',
  styleUrls: ['./upload-photo-form.component.css']
})
export class UploadPhotoFormComponent {
  public uploadForm: FormGroup
  @Output() public uploadPhotoButton = new EventEmitter<Photo>()

  constructor(private _formBuilder: FormBuilder) {
    this.formGenerate()
  }

  private formGenerate(): void {
    this.uploadForm = this._formBuilder.group({
      id: [1, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  private uploadPhoto(): void {
    let image = this.uploadForm.value as Photo
    this.uploadPhotoButton.emit(image)
  }
}
