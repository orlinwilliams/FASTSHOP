//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsRoutingModule } from './admins-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//COMPONETENES
import { AdminsComponent } from './admins.component';
import { SharedModule } from '../shared/shared.module';
import { CompaniesComponent } from './companies/companies.component';
import { PricingComponent } from './pricing/pricing.component';
import { UsersComponent } from './users/users.component';
import { ThemesComponent } from './themes/themes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AdminsComponent,
    CompaniesComponent,
    PricingComponent,
    UsersComponent,
    ThemesComponent,
  ],
  imports: [CommonModule, SharedModule, AdminsRoutingModule,NgbModule, FormsModule,ReactiveFormsModule],
})
export class AdminsModule {}
