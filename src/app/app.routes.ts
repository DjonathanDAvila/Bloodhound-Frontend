import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes)
  },
  {
    path: 'pages',
    loadChildren: () => import('./features/pages/pages.routes').then(m => m.pagesRoutes)
  },
  { path: '', redirectTo: 'pages/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];
