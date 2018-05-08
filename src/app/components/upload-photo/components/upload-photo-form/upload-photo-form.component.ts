import { Component, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Photo } from '../../../../models/index'
import { ApiService } from '../../../../api/api.service'
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector'

@Component({
  selector: 'app-upload-photo-form',
  templateUrl: './upload-photo-form.component.html',
  styleUrls: ['./upload-photo-form.component.css']
})
export class UploadPhotoFormComponent {
  public uploadForm: FormGroup
  selectedFile: File = null
  //@Output() public uploadPhotoButton = new EventEmitter<Photo>()

  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService
  ) {
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

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0]
  }

  private uploadPhoto(): void {
    //let image = this.uploadForm.value as Photo
    //this.uploadPhotoButton.emit(image)
    const fd = new FormData()
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this._apiService.post('photos', fd).subscribe(res => {
      console.log(res)
    })
  }
}
