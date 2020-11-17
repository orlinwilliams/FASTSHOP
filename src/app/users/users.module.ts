//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';


//COMPONENTES
import { UsersComponent } from './users.component';
import { HomeComponent } from './home/home.component';
import { FilesComponent } from './files/files.component';


@NgModule({
  declarations: [
    UsersComponent,
    HomeComponent,
    FilesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
