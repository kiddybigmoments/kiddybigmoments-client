import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import{HomeComponent} from './components/home/home.component';
//import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  { path: 'home', component: LoginFormComponent },
  {
    path: 'signup',
    component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
