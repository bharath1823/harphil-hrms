import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router) {}

  ngOnInit() {
    // Check if the user is logged in by checking localStorage
    const user = localStorage.getItem('user');
    
    if (!user) {
      // If user is not logged in, redirect to login page
      this.router.navigateByUrl('/login');
    }
  }

  // Logout method
  logout() {
    // Remove user credentials from localStorage
    localStorage.removeItem('user');
    // Redirect to the login page
    this.router.navigateByUrl('/login');
  }
 

}
