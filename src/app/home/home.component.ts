import { Component } from '@angular/core';
import { AuthGuard } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [AuthGuard]
})
export class HomeComponent {

}
