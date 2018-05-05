import { Component, OnInit } from '@angular/core'
import { PhotoApiService } from '../services/photo-api.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { ApiResponse, Photo } from '../models'

@Component({
  selector: 'image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: Photo

  constructor(
    private photoApiService: PhotoApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.photoApiService
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
