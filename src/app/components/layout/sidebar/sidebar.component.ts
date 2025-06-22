import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
   this.sidebarData = [
     {
       routerLink: 'users',
       icon: 'fa fa-home',
       label: 'Users'
     },
     {
       routerLink: 'roles',
       icon: 'fa fa-home',
       label: 'Permissions'
     },
     {
       routerLink: 'permissions',
       icon: 'fa fa-home',
       label: 'Permissions'
     },
   ];
  }

  public collapsed: boolean = false;
  public sidebarData: any[];

  ngOnInit(): void {
  }

}
