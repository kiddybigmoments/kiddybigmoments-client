import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserComponent } from './components/user/user.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
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
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe, ImageSearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
