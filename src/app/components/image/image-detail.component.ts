import { Component, OnInit } from '@angular/core'
import { ImageService } from './shared/image.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { PhotoService } from '../../services/photo.service'

import { ApiResponse, Photo } from '../../models'

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: Photo

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.photoService
      .getPhoto(this.route.snapshot.params.id)
      .subscribe((response: Photo) => {
        if (response) {
          this.image = response
        }
      })
  }

  goBack(): void {
    this.location.back()
  }
}
