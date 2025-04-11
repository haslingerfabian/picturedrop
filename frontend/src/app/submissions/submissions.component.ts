import { WorkspaceListComponent } from './../workspace-list/workspace-list.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-submissions',
  imports: [CommonModule, WorkspaceListComponent],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {
  items = Array.from({ length: 20 }, (_, i) => `Element ${i + 1}`); // Beispiel-Liste

}
