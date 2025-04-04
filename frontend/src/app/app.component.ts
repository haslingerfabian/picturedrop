import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenapiComponent } from './openapi/openapi.component';
import { LoginComponent } from "./login/login.component";
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  //RouterOutlet, OpenapiComponent, LoginComponent, WorkspacesComponent,
  imports: [ NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
