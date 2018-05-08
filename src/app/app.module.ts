import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AlertModule } from 'ng2-bootstrap'
import { RouterModule } from '@angular/router'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SignInComponent } from './components/user/sign-in/sign-in.component'
import { UserComponent } from './components/user/user.component'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ImageService } from './components/image/shared/image.service'
import { ImageFilterPipe } from './components/image/shared/filter.pipe'
import { ImageSearchPipe } from './components/image/shared/search.pipe'
import { ImageDetailComponent } from './components/image/image-detail.component'
import { appRoutes } from '../routes'
import { HomeComponent } from './components/home/home.component'
import { PhotoService } from './photos/photo.service'
import { ApiService } from './api/api.service'
import { AuthService } from './auth/auth.service'
import { AltausuarioComponent } from './components/altausuario/altausuario.component'
import { NotauthorizedComponent } from './components/notauthorized/notauthorized.component'
import { LoginComponent } from './components/login/login.component'
import { GalleryComponent } from './components/gallery/gallery.component'
import { SearchComponent } from './components/search/search.component'
import { RegisterFormComponent } from './components/register/components/register-form/register-form.component'
import { RegisterUrlComponent } from './components/register-url/register-url.component'
import { RegisterFormService } from './components/register/services/register-form.service'
import { AddKidUrlComponent } from './components/add-kid-url/add-kid-url.component'
import { AddKidFormComponent } from './components/add-kid/components/add-kid-form/add-kid-form.component'
import { AddKidFormService } from './components/add-kid/services/add-kid-form.service'
import { RegisterResultComponent } from './components/register/components/register-result/register-result.component'
import { UploadPhotoFormComponent } from './components/upload-photo/components/upload-photo-form/upload-photo-form.component'
import { UploadPhotoUrlComponent } from './components/upload-photo-url/upload-photo-url/upload-photo-url.component'

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
    SignInComponent,
    UserComponent,
    AltausuarioComponent,
    NotauthorizedComponent,
    LoginComponent,
    RegisterFormComponent,
    RegisterUrlComponent,
    AddKidFormComponent,
    AddKidUrlComponent,
    RegisterResultComponent,
    UploadPhotoFormComponent,
    UploadPhotoUrlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    AuthService,
    RegisterFormService,
    AddKidFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
