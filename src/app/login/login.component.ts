import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginExternalService } from '../services/login.external.service';

import { LoginForm } from './loginform.model';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: boolean;
  constructor(private router: Router,
    private loginExternalService: LoginExternalService) {
  }
  auth: Subscription;
  ngOnInit() {
    this.error = false;
  }

  gotoPage(user, pass): void {

    this.error = false;
    this.auth = this.loginExternalService.login(user, pass).subscribe(
      data => {

          this.router.navigate(['photo-view']);

      })
  }
}
