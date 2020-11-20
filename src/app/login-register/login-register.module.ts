//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterRoutingModule } from './login-register-routing.module';

//COMPONENTES
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginRegisterComponent } from './login-register.component';

@NgModule({
  declarations: [ LoginRegisterComponent,LoginComponent, RegisterComponent],
  imports: [CommonModule, LoginRegisterRoutingModule],
})
export class LoginRegisterModule {}
