import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-openapi',
  imports: [],
  templateUrl: './openapi.component.html',
  styleUrl: './openapi.component.css'
})
export class OpenapiComponent {

  constructor(private apiService: ApiService)
  {
    this.apiService.getData()
  }
}
