import { Component, OnInit } from '@angular/core';
import { ToggleSidebarService } from '../services/toggle-sidebar.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public aponedSidebarService: ToggleSidebarService) { }

  ngOnInit(): void {

  }

}
