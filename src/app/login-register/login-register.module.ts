//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//COMPONENTES
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterComponent } from './login-register.component';

@NgModule({
  declarations: [LoginRegisterComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class LoginRegisterModule {}
