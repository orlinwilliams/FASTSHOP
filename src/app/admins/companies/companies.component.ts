import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-register/login.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  currentAdmin: string = 'Admin';
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    if (this.loginService.currentUser.username) {
      this.currentAdmin = this.loginService.currentUser.username;
    }
  }
}
