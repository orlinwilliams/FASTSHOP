import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-clients',
  templateUrl: './users-clients.component.html',
  styleUrls: ['./users-clients.component.css']
})
export class UsersClientsComponent implements OnInit {
  minPassword:number = 3;
  showMessageErrorPassword: boolean = false;

  formNewClient = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(45),
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(45),
      Validators.minLength(3),
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(this.minPassword),
    ]),
  });
  constructor() { }

  ngOnInit(): void {
  }
  passwordValidator() {
    if (this.formNewClient.get('password').value < this.minPassword) {
      this.showMessageErrorPassword = true;
    } else this.showMessageErrorPassword = false;
  }
  savedNewClient(){
    
  }
}
