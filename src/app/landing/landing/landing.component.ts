import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
  isLoggedIn: boolean;

  constructor (public authService: AuthService) {
    this.isLoggedIn = false;
  }

  public ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((success: boolean) => {
      this.isLoggedIn = success;
    });
  }
  
  public logout(): void {
    this.authService.logout({ logoutParams: { returnTo: environment.baseUrl } });
  }
}
