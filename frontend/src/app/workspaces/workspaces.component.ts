import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workspaces',
  imports: [CommonModule],
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent {
  items = Array.from({ length: 20 }, (_, i) => `Element ${i + 1}`); // Beispiel-Liste
}
