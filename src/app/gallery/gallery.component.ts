import { Component, OnChanges, OnInit, Input } from '@angular/core'

import { PhotoApiService } from '../services/photo-api.service'
import { ApiResponse, Photo } from '../models'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges, OnInit {
  title = 'Click on an image for full size'
  @Input() filterBy? = 'all'

  visibleImages: any[] = []

  private toggle = false
  classes: string[] = []
  show = false

  constructor(private photoApiService: PhotoApiService) {}

  ngOnInit() {
    this.loadPhotos()
  }

  ngOnChanges() {
    this.loadPhotos()
  }

  loadPhotos(criteria: object = {}) {
    this.photoApiService
      .getPhotos(criteria)
      .subscribe((response: ApiResponse<Photo>) => {
        this.visibleImages = response.results
      })
  }

  clickEvent() {
    console.log('sidebarToggled')
    this.classes.splice(this.classes.length - 1, 1)
    this.show = !this.show
    if (this.show) {
      this.classes.push('active1')
    } else {
      this.classes.push('not-active1')
    }
  }
}
