import { Component, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Photo } from '../../../../models/index'
import { ApiService } from '../../../../services/api.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-upload-photo-form',
  templateUrl: './upload-photo-form.component.html',
  styleUrls: ['./upload-photo-form.component.css']
})
export class UploadPhotoFormComponent {
  public uploadForm: FormGroup
  imagen = null
  //@Output() public uploadPhotoButton = new EventEmitter<Photo>()

  constructor(
    private _formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _httpClient: HttpClient
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
    this.imagen = btoa(event.target.files[0])
  }

  private uploadPhoto(): void {
    //let image = this.uploadForm.value as Photo
    //this.uploadPhotoButton.emit(image)
    let Photoing = {
      kids: '1',
      name: 'Hola',
      title: 'Foto Chula',
      description: 'Pos eso mismo',
      image: this.imagen
    }
    //this._apiService.post('photos',Photo).subscribe(res => {
    //console.log(res)
    //})
    this._httpClient
      .post<Photo>('http://localhost:8000/api/v1/photos/', Photoing)
      .subscribe(res => {
        console.log(res)
      })
  }
}
