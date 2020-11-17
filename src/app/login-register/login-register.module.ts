//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterRoutingModule } from './login-register-routing.module';

//COMPONENTES
import { LoginRegisterComponent } from './login-register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginRegisterComponent, LoginComponent],
  imports: [CommonModule, LoginRegisterRoutingModule],
})
export class LoginRegisterModule {}
