import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbarold/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageService } from './components/image/shared/image.service';
import { ImageFilterPipe } from './components/image/shared/filter.pipe';
import { ImageSearchPipe } from './components/image/shared/search.pipe';
import { ImageDetailComponent } from './components/image/image-detail.component';
import { appRoutes } from '../routes';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImageSearchPipe,
    ImageDetailComponent,
    SearchComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe, ImageSearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
