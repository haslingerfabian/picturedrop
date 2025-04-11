import { WorkspaceService } from './../../../backend/src/services/workspaces.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubmissionItemsService } from '../../libs/src/app/api/services';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private submissionItemService: SubmissionItemsService) {}

  getAllSubmissionItemData()
  {
    this.submissionItemService.getAllSubmissionItems().subscribe(value => {console.log(value)});
  }
}
