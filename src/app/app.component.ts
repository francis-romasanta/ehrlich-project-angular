import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ehrlich-project';
  isLoggedIn: boolean;

  constructor (public authService: AuthService) {
    this.isLoggedIn = false;
  }
  public ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((success: boolean) => {
      this.isLoggedIn = success;
    });
  }
}
