import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkspaceListComponent } from '../workspace-list/workspace-list.component';

@Component({
  selector: 'app-workspaces',
  imports: [CommonModule, WorkspaceListComponent],
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent {
  
}
