import { Component, HostListener, OnInit } from '@angular/core';
import { ToggleSidebarService } from 'src/app/services/shared/toggle-sidebar.service';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login-register/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  faChevronCircleRight = faChevronCircleRight;
  optionMenu: string;
  optionUser:boolean = false;
  optionTheme:boolean = false;
  //configuraciones del sidebar
  _modeNum: number = 1;
  _positionNum: number = 0;
  _dock: boolean = false;
  _closeOnClickOutside: boolean = false;
  _closeOnClickBackdrop: boolean = false;
  _showBackdrop: boolean = false;
  _animate: boolean = true;
  _trapFocus: boolean = false;//
  _autoFocus: boolean = true;//
  _keyClose: boolean = true;
  _autoCollapseHeight: number = null;
  _autoCollapseWidth: number = null;
  _MODES: Array<string> = ['over', 'push', 'slide'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  constructor(
    public aponedSidebarService: ToggleSidebarService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    if (window.innerWidth <= 900) {
      this._modeNum = 0;
    }
    //console.log(this.loginService.currentUser);
    if (this.loginService.currentUser.role[0].name == 'admin') {
      this.optionMenu = 'admin';
    } else if (this.loginService.currentUser.role[0].name == 'user') {
      this.optionMenu = 'user';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    //console.log('Width: ' + event.target.innerWidth);
    if (event.target.innerWidth < 900) {
      this._modeNum = 0;
    } else {
      this._modeNum = 1;
    }
  }
  //-------------Mostrar mas opciones
  showOptions(){
    this.optionUser = ! this.optionUser
  }
  optionsThemes(){
    this.optionTheme = ! this.optionTheme;
  }
}
