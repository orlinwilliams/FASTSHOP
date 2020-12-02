import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login-register/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorPasswordEmail:boolean = false;
  formLogin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.minLength(5),
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(4),
    ]),
  });
  constructor(
    private modalNewUser: NgbModal,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }
  openModalNewUser(modal) {
    this.modalNewUser.open(modal, {});
  }
  //METODOS GET
  get email() {
    return this.formLogin.get('email');
  }
  get password() {
    return this.formLogin.get('password');
  }
  login() {
    
    this.loginService.login(this.formLogin.value).subscribe(
      (res:any) => {
        console.log(res);
        if(res.status == true){
          if(res.role[0].name === 'admin'){
            this.loginService.saveCurrentUser(res)
            this.router.navigate(['/admin'])

          }
          else if (res.role[0].name === 'user'){
            this.loginService.saveCurrentUser(res);
            this.router.navigate(['/admin-companies'])
          }
        }
        else if(res.status == false){
          this.errorPasswordEmail = true
        }
      },
      (error) => console.log('error en peticion', error)
    )
  }
}
