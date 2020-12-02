import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-register/login.service';
import { ToggleSidebarService } from 'src/app/services/shared/toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  openedSibebar: boolean = true;
  currentUser: string = "usuario"
  constructor(
    private aponedSidebarService: ToggleSidebarService,
    private loginService: LoginService
  ) {}
  

  ngOnInit(): void {
    if (this.loginService.currentUser.username) {
      this.currentUser = this.loginService.currentUser.username;
    }
  }

  //Funcion cambia de estado el sidebar
  toggleSidebar() {
    this.openedSibebar = !this.openedSibebar;
    this.aponedSidebarService.opened = this.openedSibebar;
    console.log(this.aponedSidebarService.opened);
  }
}
