import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.minLength(5),
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4),
    ]),
  });
  constructor(private modalNewUser: NgbModal) {}

  ngOnInit(): void {
    console.log(this.formLogin.value);
  }
  openModalNewUser(modal) {
    this.modalNewUser.open(modal, {});
  }
  //METODOS GET
  get email(){
    return this.formLogin.get('email')
  }
  get password(){
    return this.formLogin.get('password')
  }
  submitLogin() {
    console.log(this.formLogin.value);
    
  }
}
