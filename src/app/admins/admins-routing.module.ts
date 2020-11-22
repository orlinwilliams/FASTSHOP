import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsComponent } from './admins.component';
import { CompaniesComponent } from './companies/companies.component';
import { PricingComponent } from './pricing/pricing.component';
import { ThemesComponent } from './themes/themes.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminsComponent,
    children: [
      { path: '', component: CompaniesComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'users', component: UsersComponent },
      { path: 'themes', component: ThemesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsRoutingModule {}
