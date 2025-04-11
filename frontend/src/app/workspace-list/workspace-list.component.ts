import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkspacesService } from '../../../libs/src/app/api/services';
import { Workspace } from '../../../libs/src/app/api/models/workspace';


@Component({
  selector: 'app-workspace-list',
  imports: [CommonModule],
  templateUrl: './workspace-list.component.html',
  styleUrl: './workspace-list.component.scss'
})
export class WorkspaceListComponent {

  workspaces: Workspace[] = [];

  constructor(private workspaceService: WorkspacesService) {}

  ngOnInit() {
    this.loadWorkspaces();
  }

  loadWorkspaces(): void {
    this.workspaceService.getAllWorkspaces().subscribe({
      next: (data) => {
        this.workspaces = Array.isArray(data) ? data : [data];
      },
      error: (err) => {
        console.error('Fehler beim Laden der Workspaces:', err);
      }
    });
  }
}
