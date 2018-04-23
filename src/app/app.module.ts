import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu'

import { AppComponent } from './app.component'
import { PhotoViewComponentComponent } from './photo-view-component/photo-view-component.component'
import { AppRoutingModule } from './app-routing/app-routing.module'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    PhotoViewComponentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SlideMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
