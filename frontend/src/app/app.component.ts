import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenapiComponent } from './openapi/openapi.component';
import { LoginComponent } from "./login/login.component";
import { SubmissionsComponent } from './submissions/submissions.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OpenapiComponent, LoginComponent, SubmissionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
