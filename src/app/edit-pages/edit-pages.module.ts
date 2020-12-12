import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPagesRoutingModule } from './edit-pages-routing.module';
import { EditPagesComponent } from './edit-pages.component';
import { HeaderComponent } from './header/header.component';
import { SidebarModule } from 'ng-sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [EditPagesComponent, HeaderComponent],
  imports: [
    CommonModule,
    EditPagesRoutingModule,
    SidebarModule.forRoot(),
    FontAwesomeModule,
    NgbModule
  ]
})
export class EditPagesModule { }
