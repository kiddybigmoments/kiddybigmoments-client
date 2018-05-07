<<<<<<< HEAD

import { Routes } from '@angular/router';
import { GalleryComponent } from './app/components/gallery/gallery.component';
import { ImageDetailComponent } from './app/components/image/image-detail.component';
import {SearchComponent} from './app/components/search/search.component';
import  {HomeComponent} from './app/components/home/home.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
    { path: 'gallery', component: GalleryComponent},
    { path: 'image/:id', component: ImageDetailComponent},
    { path: 'search', component: SearchComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
=======
import { Routes } from '@angular/router'
import { GalleryComponent } from './app/gallery/gallery.component'
import { ImageDetailComponent } from './app/image/image-detail.component'
import { SearchComponent } from './app/search/search.component'

export const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: 'gallery', pathMatch: 'full' }
>>>>>>> b7164b2b3ad13d72396c37cb557eb842a434ef49
]
