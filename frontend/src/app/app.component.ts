import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenapiComponent } from './openapi/openapi.component';
import { LoginComponent } from "./login/login.component";
import { SubmissionsComponent } from './submissions/submissions.component';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { LogoutComponent } from "./logout/logout.component";

@Component({
  selector: 'app-root',
  //RouterOutlet, OpenapiComponent, LoginComponent, SubmissionsComponent, WorkspacesComponent,
  imports: [NavbarComponent, RouterOutlet, OpenapiComponent, LoginComponent, SubmissionsComponent, WorkspacesComponent, ChartComponent, LogoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'frontend';
}
