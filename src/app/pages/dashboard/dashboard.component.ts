import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly loginService: LoginService,
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
    this.loginService.signout().subscribe({
      next: (res: any) => {
        console.log('Signout Message:', res.message);
        this.loginService.logout();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if(err.status === 401) {
          this.loginService.logout();
          this.router.navigate(['/login']);
        } else {
          console.log("Something went wrong !");
        }
        console.log("Signout error:", err.message);
      }
    })
  }


  handleSignoutAll() {
    this.loginService.signoutAll().subscribe({
      next: (res: any) => {
        console.log('Signout All Message:', res.message);
        this.loginService.logout();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if(err.status === 401) {
          this.loginService.logout();
          this.router.navigate(['/login']);
        } else {
          console.log("Something went wrong !");
        }
        console.log("Signout error:", err.message);
      }
    })
  }

}
