//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsRoutingModule } from './admins-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
//COMPONETENES
import { AdminsComponent } from './admins.component';
import { SharedModule } from '../shared/shared.module';
import { CompaniesComponent } from './companies/companies.component';
import { PricingComponent } from './pricing/pricing.component';
import { UsersComponent } from './users/users.component';
import { ThemesComponent } from './themes/themes.component';
import { UsersCompaniesComponent } from './users/users-companies/users-companies.component';
import { UsersClientsComponent } from './users/users-clients/users-clients.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ThemeComponent } from './themes/theme/theme.component';

@NgModule({
  declarations: [
    AdminsComponent,
    CompaniesComponent,
    PricingComponent,
    UsersComponent,
    ThemesComponent,
    UsersCompaniesComponent,
    UsersClientsComponent,
    ThemeComponent,
    //NgxDropzoneModule
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CodemirrorModule,
    NgxDropzoneModule
  ],
  providers: [
    
  ],
})
export class AdminsModule {}
