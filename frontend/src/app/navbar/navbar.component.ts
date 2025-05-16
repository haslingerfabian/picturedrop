import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title: string = 'Titel'; // Standard-Titel
  currentRoute: string = ''; // Variable zur Speicherung der aktuellen Route

  constructor(private router: Router) {
    // Überwache NavigationEnd-Events und speichere die aktuelle URL
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateTitle(event.urlAfterRedirects); // Aktualisiere den Titel
      this.currentRoute = event.urlAfterRedirects; // Setze die aktuelle Route
    });
  }

  // Methode zum Aktualisieren des Titels je nach Route
  private updateTitle(url: string) {
    switch (url) {
      case '/workspaces':
        this.title = 'Workspaces';
        break;
      case '/vouchers':
        this.title = 'Vouchers';
        break;
      case '/uploads':
        this.title = 'Uploads';
        break;
      case '/logout':
        this.title = 'Logout';
        break;
      case '/login':
        this.title = 'Login';
        break;
      default:
        this.title = 'Titel'; // Standardwert für den Titel
        break;
    }
  }

  // Methode zum Navigieren
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  // Methode zum Überprüfen, ob die Route aktiv ist
  isActive(route: string): boolean {
    return this.currentRoute === `/${route}`;
  }
}
