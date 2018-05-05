import { Component, OnChanges, Input } from '@angular/core';

import { PhotoApiService } from '../services/photo-api.service';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges{

    title = 'Start typing to search images by caption ...';

    @Input() searchBy?: string='all';

    searchImages: any[] = [];

    constructor(private photoApiService: PhotoApiService) {
        this.photoApiService.getPhotos().subscribe(console.log)
    }

    ngOnChanges() {
        this.photoApiService.getPhotos().subscribe(console.log)
    }

}
