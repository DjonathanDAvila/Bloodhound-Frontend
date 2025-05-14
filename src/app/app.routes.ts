import { Routes } from '@angular/router';

import { AuthGuard } from './features/auth/auth.guard/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes)
  },
  {
    path: 'pages',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./features/pages/pages.routes').then(m => m.pagesRoutes)
  },
  {
    path: 'landing',
    loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent)
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'landing' }
];
