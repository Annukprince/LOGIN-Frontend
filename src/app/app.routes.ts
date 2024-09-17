import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import the Dashboard component

export const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Route for login
  { path: 'dashboard', component: DashboardComponent },  // Route for dashboard
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect root path to login
];
