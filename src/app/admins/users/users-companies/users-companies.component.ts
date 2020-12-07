import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/login-register/register.service';
import { ToastService } from 'src/app/services/shared/toast.service';
import { UserRolesService } from 'src/app/services/shared/user-roles.service';

@Component({
  selector: 'app-users-companies',
  templateUrl: './users-companies.component.html',
  styleUrls: ['./users-companies.component.css'],
})
export class UsersCompaniesComponent implements OnInit {
  minPassword: number = 4;
  showMessageErrorPassword: boolean = false;
  idRole: string = '';
  formNewCompany = new FormGroup({
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
    categoryCompany: new FormControl('virtualServices', [Validators.required]),
  });

  constructor(
    private registerService: RegisterService,
    private roleService: UserRolesService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getRole();
  }
  get password() {
    return this.formNewCompany.get('password');
  }

  getRole() {
    this.roleService.getRoles().subscribe(
      (res: any) => {
        if (res.status) {
          let roleAdmin = res.result.filter((role) => role.name == 'user');
          this.idRole = roleAdmin[0]._id;
        }
      },
      (error) => console.log()
    );
  }
  passwordValidator() {
    if (this.password.value.length < this.minPassword) {
      this.showMessageErrorPassword = true;
    } else this.showMessageErrorPassword = false;
  }
  savedNewCompany() {
    const {
      username,
      email,
      password,
      nameCompany,
      country,
      address,
      categoryCompany,
    } = this.formNewCompany.value;

    this.registerService
      .saveUser({
        username,
        email,
        password,
        nameCompany,
        role: this.idRole,
        country,
        address,
        categoryCompany,
      })
      .subscribe(
        (res: any) => {
          if (res.status) {
            this.toastService.dataToast = {
              showToast: true,
              classToast: 'success',
              message: 'Compañia agregada con éxito',
            };
            this.formNewCompany.setValue({
              username: '',
              email: '',
              password: '',
              nameCompany: '',
              country: '',
              address: '',
              categoryCompany: '',
            });
          }
        },
        (error) => console.log(error)
      );
  }
}
