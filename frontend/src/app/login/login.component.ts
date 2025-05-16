import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    // hier kommt dein Login-Logik hin
    // z. B. Token setzen, Backend-Login etc.

    // Danach weiterleiten
    this.router.navigate(['/workspaces']);
  }
}
 
