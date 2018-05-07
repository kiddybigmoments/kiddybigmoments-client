import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserComponent } from './components/user/user.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ImageService } from './components/image/shared/image.service';
import { ImageFilterPipe } from './components/image/shared/filter.pipe';
import { ImageSearchPipe } from './components/image/shared/search.pipe';
import { ImageDetailComponent } from './components/image/image-detail.component';
import { appRoutes } from '../routes';
import { HomeComponent } from './components/home/home.component';
import { PhotoService } from './photos/photo.service';
import { ApiService } from './api/api.service';
import { AuthService } from './auth/auth.service';
import { AltausuarioComponent } from './components/altausuario/altausuario.component';
import { NotauthorizedComponent } from './components/notauthorized/notauthorized.component';
import { LoginComponent } from './components/login/login.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SearchComponent } from './components/search/search.component';

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
    UserComponent,
    AltausuarioComponent,
    NotauthorizedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PhotoService,
    ImageFilterPipe,
    ImageSearchPipe,
    ApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
