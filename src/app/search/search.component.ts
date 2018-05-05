import { Component, OnInit, Input } from '@angular/core'

import { PhotoService } from '../photos/photo.service'
import { ApiResponse, Photo } from '../models'

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'Start typing to search images by caption ...'

  @Input() searchBy?: string = 'all'

  searchImages: Photo[] = []

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getPhotos().subscribe((response: ApiResponse<Photo>) => {
      this.searchImages = response.results
    })
  }
}
