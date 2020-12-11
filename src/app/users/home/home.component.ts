import { Component, OnInit } from '@angular/core';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../services/login-register/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faWindowRestore = faWindowRestore;
  username:string = 'User';
  constructor(private loginService:LoginService) { }
  ngOnInit(): void {
    this.getUsername();
  }

  getUsername(){
    this.username = this.loginService.currentUser.username
  }

}
