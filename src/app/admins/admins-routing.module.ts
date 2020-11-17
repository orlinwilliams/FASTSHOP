import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsComponent } from './admins.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  {
    path: '',
    component: AdminsComponent,
    children: [{ path: '', component: CompaniesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminsRoutingModule {}
