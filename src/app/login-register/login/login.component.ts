import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private modalNewUser: NgbModal) {}

  ngOnInit(): void {}
  openModalNewUser(modal){
    this.modalNewUser.open(modal,{});
  }
}
