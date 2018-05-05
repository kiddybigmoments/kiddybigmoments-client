import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AlertModule } from 'ng2-bootstrap'
import { RouterModule } from '@angular/router'
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { GalleryComponent } from './gallery/gallery.component'
import { PhotoService } from './photos/photo.service'
import { ApiService } from './api/api.service'
import { AuthService } from './auth/auth.service'
import { ImageFilterPipe } from './image/shared/filter.pipe'
import { ImageSearchPipe } from './image/shared/search.pipe'
import { ImageDetailComponent } from './image/image-detail.component'
import { appRoutes } from '../routes'
import { SearchComponent } from './search/search.component'
import { AltausuarioComponent } from './altausuario/altausuario.component'
import { NotauthorizedComponent } from './notauthorized/notauthorized.component'
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImageSearchPipe,
    ImageDetailComponent,
    SearchComponent,
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
