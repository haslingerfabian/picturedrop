import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace-list',
  imports: [CommonModule],
  templateUrl: './workspace-list.component.html',
  styleUrl: './workspace-list.component.scss'
})
export class WorkspaceListComponent {

  items = Array.from({ length: 20 }, (_, i) => `Element ${i + 1}`); // Beispiel-Liste

}
