import { Routes } from '@angular/router'
import { GalleryComponent } from './app/components/gallery/gallery.component'
import { ImageDetailComponent } from './app/components/image/image-detail.component'
import { SearchComponent } from './app/components/search/search.component'
import { HomeComponent } from './app/components/home/home.component'
import { RegisterUrlComponent } from './app/components/register-url/register-url.component'
import { AddKidUrlComponent } from './app/components/add-kid-url/add-kid-url.component'
import { UploadPhotoUrlComponent } from './app/components/upload-photo-url/upload-photo-url/upload-photo-url.component'

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'add-kid', component: AddKidUrlComponent },
  { path: 'upload-photo', component: UploadPhotoUrlComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]
