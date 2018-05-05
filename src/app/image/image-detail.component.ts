
import { Component, OnInit } from "@angular/core";
import { PhotoApiService } from '../services/photo-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
    selector: 'image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

    image :any;

    constructor(
        private photoApiService: PhotoApiService,
        private route: ActivatedRoute,
        private location: Location) {}

    ngOnInit() {
        this.photoApiService.getPhoto(this.route.snapshot.params['id']).subscribe(console.log);
    }

    goBack(): void {
        this.location.back();
    }

}
