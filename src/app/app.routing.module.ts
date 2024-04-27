import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
