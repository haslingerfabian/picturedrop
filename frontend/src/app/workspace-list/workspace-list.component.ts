import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SubmissionItemsService } from '../../../libs/src/app/api/services';

@Component({
  selector: 'app-workspace-list',
  imports: [CommonModule],
  templateUrl: './workspace-list.component.html',
  styleUrl: './workspace-list.component.scss'
})
export class WorkspaceListComponent {

  items = Array.from({ length: 20 }, (_, i) => `Element ${i + 1}`); // Beispiel-Liste

    constructor(private submissionItemService: SubmissionItemsService) {}

    getAllSubmissionItemData()
    {
      this.submissionItemService.getAllSubmissionItems().subscribe(value => {console.log(value)});
    }
}
