import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  minPassword: number = 4;
  showMessageErrorPassword: boolean = false;
  formNewUser = new FormGroup({
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
    typeUser: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}
  get password() {
    return this.formNewUser.get('password');
  }
  passwordValidator() {
    if (this.password.value.length < this.minPassword) {
      this.showMessageErrorPassword = true;
    } else this.showMessageErrorPassword = false;
  }
  savedNewUser() {
    console.log(this.formNewUser.value);
  }
}
