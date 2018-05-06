import { Component, OnInit, Input } from '@angular/core'

import { PhotoService } from '../photos/photo.service'
import { ApiResponse, Photo } from '../models'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title = 'Click on an image for full size'
  @Input() filterBy? = 'all'

  visibleImages: any[] = []

  private toggle = false
  classes: string[] = []
  show = false

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.loadPhotos()
  }

  loadPhotos(criteria: object = {}) {
    this.photoService
      .getPhotos(criteria)
      .subscribe((response: ApiResponse<Photo>) => {
        this.visibleImages = response.results
      }, this.photoService.handleHttpError)
  }

  clickEvent() {
    this.classes.splice(this.classes.length - 1, 1)
    this.show = !this.show
    if (this.show) {
      this.classes.push('active1')
    } else {
      this.classes.push('not-active1')
    }
  }
}
