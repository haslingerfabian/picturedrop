import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenapiComponent } from './openapi/openapi.component';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OpenapiComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
