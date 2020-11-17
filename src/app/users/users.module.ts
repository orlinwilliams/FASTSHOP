import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { FilesComponent } from './files/files.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  declarations: [
    UsersComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FilesComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    SidebarModule.forRoot(),
    FontAwesomeModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
