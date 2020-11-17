import { Component,  OnInit } from '@angular/core';
import { ToggleSidebarService } from 'src/app/services/toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private aponedSidebarService: ToggleSidebarService) {}
  openedSibebar: boolean = true;

  ngOnInit(): void {}

  //Funcion cambia de estado el sidebar
  toggleSidebar() {
    this.openedSibebar = !this.openedSibebar;
    this.aponedSidebarService.opened = this.openedSibebar;
    console.log(this.aponedSidebarService.opened);
  }
}
