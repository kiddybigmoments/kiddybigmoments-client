import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { DeletePhotosComponentComponent } from './delete-photos-component/delete-photos-component.component'
import { AppRoutingModule } from './app-routing/app-routing.module'
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [AppComponent, DeletePhotosComponentComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
