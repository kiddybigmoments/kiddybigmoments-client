
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

    visibleImages = [];

    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id == id);
    }
    constructor(){

    }

}

const IMAGES = [
    /* Photos */
    {"id": 1, "category": "photos", "caption": "1º Eco", "url": "http://localhost:8000/media/photos/IMG_20180220_100908.jpg"},

]
