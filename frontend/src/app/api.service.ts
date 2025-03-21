import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubmissionItemsService } from '../../libs/src/app/api/services';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private submissionItemService: SubmissionItemsService) {}

  getData()
  {
    this.submissionItemService.getAllSubmissionItems().subscribe(value => {console.log(value)});
  }
}
