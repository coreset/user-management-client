import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  handleTest() {
    this.dashboardService.test().subscribe({
      next: (response) => {
        // Handle successful response
        console.log('Data:', response);
      },
      error: (err) => {
        // Show error to user
        console.error('Error:', err.message);
      }
    });
  }

  handleSignout() {
    this.authService.signout().subscribe({
      next: (res: any) => {
        console.log('Signout Message:', res.message);
        this.authService.logout();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if(err.status === 401) {
          this.authService.logout();
          this.router.navigate(['/login']);
        } else {
          console.log("Something went wrong !");
        }
        console.log("Signout error:", err.message);
      }
    })
  }


  handleSignoutAll() {
    this.authService.signoutAll().subscribe({
      next: (res: any) => {
        console.log('Signout All Message:', res.message);
        this.authService.logout();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if(err.status === 401) {
          this.authService.logout();
          this.router.navigate(['/login']);
        } else {
          console.log("Something went wrong !");
        }
        console.log("Signout error:", err.message);
      }
    })
  }

}
