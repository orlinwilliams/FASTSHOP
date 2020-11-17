//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from 'ng-sidebar';
import { SharedRoutingModule } from './shared-routing.module';

//COMPONENTES
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [SidebarComponent,HeaderComponent],
  imports: [
    CommonModule,
    SidebarModule.forRoot(),
    SharedRoutingModule,
    FontAwesomeModule
  ],
  exports:[SidebarComponent,HeaderComponent]
})
export class SharedModule { }
