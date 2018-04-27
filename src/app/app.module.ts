import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AlertModule } from 'ng2-bootstrap'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { LoginFormComponent } from './components/login-form/login-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, AlertModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
