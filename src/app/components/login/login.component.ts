<<<<<<< HEAD:src/app/components/login/login.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginExternalService } from '../../services/login.external.service';
import { LoginForm } from './loginform.model';
import { Subscription } from 'rxjs/Subscription';

=======
import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { LoginExternalService } from '../auth/login.external.service'
>>>>>>> b7164b2b3ad13d72396c37cb557eb842a434ef49:src/app/login/login.component.ts

import { LoginForm } from './loginform.model'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: boolean
  constructor(
    private router: Router,
    private loginExternalService: LoginExternalService
  ) {}
  auth: Subscription
  ngOnInit() {
    this.error = false
  }

  gotoPage(user, pass): void {
    this.error = false
    this.auth = this.loginExternalService.login(user, pass).subscribe(data => {
      this.router.navigate(['photo-view'])
    })
  }
}
