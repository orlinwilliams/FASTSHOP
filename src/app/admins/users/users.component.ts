import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/admin/users.service';
import { RegisterService } from 'src/app/services/login-register/register.service';
import { UserRolesService } from 'src/app/services/shared/user-roles.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  admins: any = [];
  minPassword: number = 4;
  buttonControl: string = 'create';
  messageControl: string = 'Nuevo administrador';
  role: any = {};
  idAdmin: string = '';
  showMessageErrorPassword: boolean = false;
  formNewAdmin = new FormGroup({
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
      Validators.maxLength(60),
      Validators.minLength(this.minPassword),
    ]),
  });
  constructor(
    private userService: UsersService,
    private roleService: UserRolesService,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.getAdmins();
    this.getRole();
  }

  getRole() {
    this.roleService.getRoles().subscribe(
      (res: any) => {
        if (res.status) {
          let roleAdmin = res.result.filter((role) => role.name == 'admin');
          this.role = roleAdmin[0];
        }
      },
      (error) => console.log()
    );
  }
  getAdmins() {
    this.userService.getAdmins().subscribe(
      (res: any) => {
        if (res.status) {
          this.admins = res.result;
          //console.log(this.admins);
        }
      },
      (error) => console.log(error)
    );
  }
  getAdmin(id) {
    console.log(id);
    this.userService.getAdmin(id).subscribe(
      (res: any) => {
        if (res.status) {
          this.idAdmin = res.result._id;
          this.formNewAdmin.setValue({
            username: res.result.username,
            email: res.result.email,
            password: res.result.password,
          });
          this.buttonControl = 'update';
          this.messageControl = 'Actualizar administrador';
        }
      },
      (error) => console.log(error)
    );
  }

  cancelUpdate() {
    this.formNewAdmin.setValue({
      username: '',
      email: '',
      password: '',
    });
    this.buttonControl = 'create';
    this.messageControl = 'Nuevo administrador';
  }
  updateAdmin() {
    let { username, email, password } = this.formNewAdmin.value;
    //console.log(this.role._id);
    this.userService
      .updateAdmin(this.idAdmin, {
        username,
        email,
        password,
        role: this.role._id,
      })
      .subscribe(
        (res: any) => {
          this.cancelUpdate();
          this.getAdmins();
          this.messageControl = 'Nuevo administrador';
        },
        (error) => console.log(error)
      );
  }
  get password() {
    return this.formNewAdmin.get('password');
  }
  passwordValidator() {
    if (this.password.value.length < this.minPassword) {
      this.showMessageErrorPassword = true;
    } else this.showMessageErrorPassword = false;
  }
  savedNewAdmin() {
    console.log(this.formNewAdmin.value);
    const { username, email, password } = this.formNewAdmin.value;
    this.registerService
      .saveAdmin({
        username,
        email,
        password,
        role: this.role._id,
      })
      .subscribe(
        (res: any) => {
          if (res.status) {
            this.getAdmins();
          }
        },
        (error) => console.log(error)
      );
  }
}
