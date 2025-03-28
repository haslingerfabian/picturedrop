import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { }
