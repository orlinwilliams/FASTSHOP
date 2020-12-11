import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/shared/toast.service';
import { ToggleSidebarService } from '../services/shared/toggle-sidebar.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(
    public aponedSidebarService: ToggleSidebarService,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {}
}
