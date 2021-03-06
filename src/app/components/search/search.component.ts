import { Component, OnInit, Input } from '@angular/core'

import { PhotoService } from '../../services/photo.service'
import { Photo } from '../../models'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'Start typing to search images by caption ...'

  @Input() searchBy?: string = 'all'

  searchImages: Photo[] = []

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getPhotos().subscribe((response: Photo[]) => {
      this.searchImages = response
    })
  }
}
