import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ehrlich-project';
  isLoggedIn: boolean;

  constructor (public authService: AuthService, @Inject(DOCUMENT) private document: Document) {
    this.isLoggedIn = false;
  }
  public ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((success: boolean) => {
      this.isLoggedIn = success;
    });
  }
  public logout(): void {
    this.authService.logout({ logoutParams: { returnTo: this.document.location.origin } });
  }
}
