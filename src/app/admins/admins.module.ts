//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsRoutingModule } from './admins-routing.module';



//COMPONETENES
import { AdminsComponent } from './admins.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminsRoutingModule
  ]
})
export class AdminsModule { }
