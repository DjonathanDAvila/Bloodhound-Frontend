import { Routes } from '@angular/router';

import { LandingComponent } from '../pages/landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const pagesRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'dash', component: MainLayoutComponent, children: [{ path: '', component: DashboardComponent }] }
];
