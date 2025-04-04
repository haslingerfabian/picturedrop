import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   title: string = 'Titel'; // Standard-Titel

   constructor(private router: Router) {}

   navigateTo(route: string) {
     this.router.navigate([route]);
   }
}
