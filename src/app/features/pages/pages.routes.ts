import { Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard/auth.guard';
import { CreateEditRuleComponent } from './create-edit-rule/create-edit-rule.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PullRequestsComponent } from './pull-requests/pull-requests.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RulesListComponent } from './rules-list/rules-list.component';

export const pagesRoutes: Routes = [
  {
    path: 'main',
    component: MainLayoutComponent,
    canActivateChild: [],//AuthGuard
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'rules', component: RulesListComponent },
      { path: 'rules/create', component: CreateEditRuleComponent },
      { path: 'rules/edit/:id', component: CreateEditRuleComponent },
      { path: 'repositories', component: RepositoriesComponent },
      { path: 'repositories/:repo/:name/pull-requests', component: PullRequestsComponent }
    ]
  }
];
