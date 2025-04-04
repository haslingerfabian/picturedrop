import { Routes } from '@angular/router';
import { WorkspacesComponent } from './workspaces/workspaces.component';

export const routes: Routes = [
    {path: '', redirectTo: '/workspaces', pathMatch: 'full'},
    //{ path: 'user', component: UserComponent },
    { path: 'workspaces', component: WorkspacesComponent }
    //{ path: 'gutscheine', component: GutscheineComponent },
    //{ path: 'uploads', component: UploadsComponent },
  ];
