import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  showOptionCompany: boolean = false;
  showButtonClient: boolean = true;
  showMessageErrorPassword: boolean = false;
  minPassword: number = 4;
  faShoppingCart = faShoppingCart;
  faCcPaypal = faCcPaypal;
  faCcVisa = faCcVisa;
  currentPackage:boolean = false;
  

  //FORMULARIO TIPO CLIENTE
  formRegisterClient = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(45),
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.minLength(7),
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(this.minPassword),
    ]),
    typeUsers: new FormControl('', [Validators.required]),
  });
  //FORMULARIO TIPO CLIENTE
  formRegisterCompany = new FormGroup({
    nameCompany: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
    ]),
    country: new FormControl('', [
      Validators.required,
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
      Validators.minLength(5),
    ]),
    categoryCompany: new FormControl('', [Validators.required]),
  });

  constructor(private modalPayCompany:NgbModal) {}

  ngOnInit(): void {}

  changeOptioTypeUser(event) {
    if (event.target.value === 'company') {
      this.showButtonClient = false;
      this.showOptionCompany = true;
    } else if (event.target.value === 'client') {
      this.showOptionCompany = false;
      this.showButtonClient = true;
    }
  }

  get password() {
    return this.formRegisterClient.get('password');
  }
  passwordValidator() {
    if (this.password.value.length < this.minPassword) {
      this.showMessageErrorPassword = true;
    } else this.showMessageErrorPassword = false;
  }
  //
  registerClientUser() {
    console.log(this.formRegisterClient.value);
  }
  registerCompanyUser(){
    console.log(this.formRegisterCompany.value);
  }
  choosePackage(id){
    console.log('Id: ', id);
    this.currentPackage = true;
    //if(event.target.value == )
  }
  openModalPay(modal){
    this.modalPayCompany.open(modal, { size: 'lg' }); 
  }
  registerClientCompany(){
    
    this.modalPayCompany.dismissAll(); 
    console.log(this.formRegisterCompany.value);
    
  }
}
