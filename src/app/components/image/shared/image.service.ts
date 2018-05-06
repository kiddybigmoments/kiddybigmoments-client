
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
    {"id": 1, "category": "photos", "caption": "En el parto", "url": "https://img.huffingtonpost.com/asset/56afa24c1f00007f00217108.jpeg"},
    {"id": 2, "category": "photos", "caption": "Piel con piel", "url": "https://img.huffingtonpost.com/asset/56afa2c01a00001001ab1b94.jpeg?ops=scalefit_600_noupscale"},
    {"id": 3, "category": "photos", "caption": "1 dia de vida", "url": "https://childdevelopmentinfo.com/wp-content/uploads/2011/09/ages-stagesbaby-infant-development-parentingnewborn_baby.jpg"},
    {"id": 4, "category": "photos", "caption": "1 día de vida", "url": "https://images-prod.healthline.com/hlcmsresource/images/topic_centers/parenting/1296x728_When_Do_Newborn_Babies_Start_to_See-1-Newborn_to_4_Months.jpg"},
    {"id": 5, "category": "videos", "caption": "1 mes. Sus pies", "url": "http://i0.wp.com/blog.shalimarbphotography.com/wp-content/uploads/2012/02/57.png"},


]
