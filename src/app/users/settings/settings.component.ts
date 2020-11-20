import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  showDescription: boolean;
  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth <= 750) {
      this.showDescription = false;
    } else {
      this.showDescription = true;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //console.log('Width: ' + event.target.innerWidth);
    if (event.target.innerWidth < 750) {
      this.showDescription = false;
    } else {
      this.showDescription = true;
    }
  }
}
