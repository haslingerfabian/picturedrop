import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-submissions',
  imports: [CommonModule],
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss'
})
export class SubmissionsComponent {

  items = Array.from({ length: 20 }, (_, i) => `Element ${i + 1}`); // Beispiel-Liste
}
