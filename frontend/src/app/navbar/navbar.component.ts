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

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateTitle(event.urlAfterRedirects); 
    });
  }

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
        this.title = 'Page'; 
        break;
    }
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
