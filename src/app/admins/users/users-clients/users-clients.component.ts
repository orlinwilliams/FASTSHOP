import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/admin/users.service';
import { RegisterService } from 'src/app/services/login-register/register.service';
import { UserRolesService } from 'src/app/services/shared/user-roles.service';

@Component({
  selector: 'app-users-clients',
  templateUrl: './users-clients.component.html',
  styleUrls: ['./users-clients.component.css'],
})
export class UsersClientsComponent implements OnInit {
  minPassword: number = 3;
  showMessageErrorPassword: boolean = false;
  clients: any = [];
  idRole: string = '';
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
  constructor(
    private registerService: RegisterService,
    private usersService: UsersService,
    private roleService: UserRolesService
  ) {}

  ngOnInit(): void {
    this.getCliens();
    this.getRole();
  }
  passwordValidator() {
    if (this.formNewClient.get('password').value < this.minPassword) {
      this.showMessageErrorPassword = true;
    } else this.showMessageErrorPassword = false;
  }
  getCliens() {
    this.usersService.getClients().subscribe(
      (res: any) => {
        if (res.status) {
          this.clients = res.result;
        }
      },
      (error) => console.log(error)
    );
  }
  getRole() {
    this.roleService.getRoles().subscribe(
      (res: any) => {
        if (res.status) {
          let roleAdmin = res.result.filter((role) => role.name == 'client');
          this.idRole = roleAdmin[0]._id;
          
        }
      },
      (error) => console.log(error)
    );
  }
  savedNewClient() {
    const { username, email, password } = this.formNewClient.value;
    this.registerService
      .saveClient({ username, email, password, role: this.idRole })
      .subscribe(
        (res:any) => {
          console.log(res);
          this.getCliens();
        },
        (error) => console.log(error)
      );
  }
}
