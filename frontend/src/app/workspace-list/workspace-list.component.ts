import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WorkspacesService } from '../../../libs/src/app/api/services';
import { Workspace } from '../../../libs/src/app/api/models/workspace';


@Component({
  selector: 'app-workspace-list',
  imports: [CommonModule],
  templateUrl: './workspace-list.component.html',
  styleUrl: './workspace-list.component.scss'
})
export class WorkspaceListComponent {

  @Input() customClass: string = ''; // Dynamische CSS-Klasse
  @Output() workspaceSelected = new EventEmitter<number>(); // Event für die Auswahl eines Workspaces
  @Input() workspaces: Workspace[] = [];
  selectedWorkspaceId: number | null = null; // ID des ausgewählten Workspaces


  onWorkspaceClick(workspaceId: number): void {
    this.selectedWorkspaceId = workspaceId; // Setze den ausgewählten Workspace
    this.workspaceSelected.emit(workspaceId); // Event auslösen
  }

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
