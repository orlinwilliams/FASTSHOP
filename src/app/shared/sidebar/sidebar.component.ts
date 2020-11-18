import { Component, HostListener, OnInit } from '@angular/core';
import { ToggleSidebarService } from 'src/app/services/toggle-sidebar.service';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  faChevronCircleRight = faChevronCircleRight;

  //configuraciones del sidebar
  _modeNum: number = 1;
  _positionNum: number = 0;
  _dock: boolean = false;
  _closeOnClickOutside: boolean = false;
  _closeOnClickBackdrop: boolean = false;
  _showBackdrop: boolean = false;
  _animate: boolean = true;
  _trapFocus: boolean = true;
  _autoFocus: boolean = true;
  _keyClose: boolean = false;
  _autoCollapseHeight: number = null;
  _autoCollapseWidth: number = null;
  _MODES: Array<string> = ['over', 'push', 'slide'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  constructor(public aponedSidebarService: ToggleSidebarService) {}
  
  ngOnInit(): void {
    if (window.innerWidth <= 900){
      this._modeNum = 0;
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //console.log('Width: ' + event.target.innerWidth);
    if(event.target.innerWidth< 900){
      this._modeNum = 0;
    }
    else{
      this._modeNum = 1;
    }
  }
}
