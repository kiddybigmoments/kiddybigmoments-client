import { Component } from '@angular/core'

@Component({
  selector: 'app-upload-photo-url',
  templateUrl: './upload-photo-url.component.html',
  styleUrls: ['./upload-photo-url.component.css']
})
export class UploadPhotoUrlComponent {
  constructor() {}

  private uploadPhoto(): void {
    console.log('subiendo foto...')
  }
}
