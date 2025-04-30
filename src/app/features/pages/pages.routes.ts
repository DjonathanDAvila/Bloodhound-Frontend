import { Routes } from '@angular/router';

import { LandingComponent } from '../pages/landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RepositoriesComponent } from './repositories/repositories.component';

export const pagesRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  {
    path: 'main', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'repositories', component: RepositoriesComponent }
    ]
  }
];
