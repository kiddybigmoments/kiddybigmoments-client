
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
]
