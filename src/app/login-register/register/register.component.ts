import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { PricingService } from 'src/app/services/shared/pricing.service';
import { UserRolesService } from 'src/app/services/shared/user-roles.service';
import { RegisterService } from 'src/app/services/login-register/register.service';
import { ToastService } from 'src/app/services/shared/toast.service';

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
  currentPackage: boolean = false;
  idChoosePackage: string = '';
  idChosseRole: string = '';
  typesUser: any = [];
  pricing: any = [];

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
    //role: new FormControl('', [Validators.required]),
  });
  //FORMULARIO TIPO CLIENTE
  formRegisterCompany = new FormGroup({
    nameCompany: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
    ]),
    country: new FormControl('Honduras', [Validators.required]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
      Validators.minLength(5),
    ]),
    categoryCompany: new FormControl('Elegir', [Validators.required]),
    //choosePackage: new FormControl('', [Validators.required]),
  });

  constructor(
    private modalPayCompany: NgbModal,
    private getPricingService: PricingService,
    private getRoleService: UserRolesService,
    private registerService: RegisterService,
    private toastService:ToastService
  ) {}

  ngOnInit(): void {
    this.getPricingService.getPricing().subscribe(
      (res: any) => {
        if (res.status) {
          this.pricing = res.result;
          //console.log(res.result);
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.getRoleService.getRoles().subscribe(
      (res: any) => {
        if (res.status == true) {
          this.typesUser.push(res.result[1]);
          this.typesUser.push(res.result[2]);
          //console.log(this.typesUser);
          this.idChosseRole = this.typesUser[0]._id;
        } else console.log('error charging type user');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  changeOptionTypeUser(event) {
    if (event.target.value === 'company') {
      this.showButtonClient = false;
      this.showOptionCompany = true;
      this.idChosseRole = this.typesUser[1]._id;
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

  //REGISTRAR USUARIO TIPO CLIENTE
  registerClientUser() {
    let data = {
      username: this.formRegisterClient.get('username').value,
      email: this.formRegisterClient.get('email').value,
      password: this.formRegisterClient.get('password').value,
      idChosseRole: this.idChosseRole,
    };

    this.registerService.saveClient(data).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => console.log(error)
    );
    
  }
  //Escoge el plan seleccionado
  choosePackage(id) {
    console.log('Id: ', id);
    this.idChoosePackage = id;
    this.currentPackage = true;
    //if(event.target.value == )
  }
  openModalPay(modal) {
    this.modalPayCompany.open(modal, { size: 'lg' });
  }
  //REGISTRAR USUARIO TIPO CLIENTE CUANDOS SE PAGA EL PLAN
  registerCompany() {
    let data = {
      username: this.formRegisterClient.get('username').value,
      email: this.formRegisterClient.get('email').value,
      password: this.formRegisterClient.get('password').value,
      role: this.idChosseRole,
      nameCompany: this.formRegisterCompany.get('nameCompany').value,
      country: this.formRegisterCompany.get('country').value,
      address: this.formRegisterCompany.get('address').value,
      categoryCompany: this.formRegisterCompany.get('categoryCompany').value,
      price: this.idChoosePackage,
    };
    this.registerService.saveUser(data).subscribe(
      (res:any) =>{
        if(res.status){
          this.toastService.dataToast = {
            showToast: true,
            classToast: 'success',
            message: 'Usuario agregado con éxito',
          };
        }
        console.log(res);
      }, 
      error=>console.log(error))
    
    this.modalPayCompany.dismissAll();
    console.log(data);

  }
}
