//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from 'ng-sidebar';
import { SharedRoutingModule } from './shared-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//COMPONENTES
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [SidebarComponent,HeaderComponent, ToastComponent],
  imports: [
    CommonModule,
    NgbModule,
    SidebarModule.forRoot(),
    SharedRoutingModule,
    FontAwesomeModule
  ],
  exports:[SidebarComponent,HeaderComponent,ToastComponent]
})
export class SharedModule { }
