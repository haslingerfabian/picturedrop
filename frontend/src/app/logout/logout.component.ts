import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  constructor(private router: Router) {}

  onLogout() {
    // Optionale Logout-Logik hier 
    this.router.navigate(['/login']);
 }
}