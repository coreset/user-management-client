import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private readonly dashboardService: DashboardService,
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

}
