import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ConnectGithubComponent } from './components/connect-github/connect-github.component';
import { LandingComponent } from '../landing/landing/landing.component';

export const authRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'landing', component: LandingComponent },
  {path: 'connect-github', component: ConnectGithubComponent }
];
