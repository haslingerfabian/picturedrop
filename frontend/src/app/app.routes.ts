import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';

import { WorkspacesComponent } from './workspaces/workspaces.component';
import { ChartComponent } from './chart/chart.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'workspaces', component: WorkspacesComponent },
      { path: 'vouchers', component: SubmissionsComponent },
      { path: 'uploads', component: ChartComponent },
      { path: 'logout', component: LogoutComponent } // Logout unter EmptyLayout
    ]
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  // optional: fallback route
  { path: '**', redirectTo: '/login' }
];
