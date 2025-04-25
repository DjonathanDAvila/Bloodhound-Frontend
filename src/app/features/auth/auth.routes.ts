import { Routes } from '@angular/router';

import { ConnectGithubComponent } from './components/connect-github/connect-github.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/signup/signup.component';

export const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'connect-github', component: ConnectGithubComponent },
];
