//MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//COMPONENTES
import { UsersComponent } from './users.component';
import { HomeComponent } from './home/home.component';
import { FilesComponent } from './files/files.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { PagesComponent } from './pages/pages.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';


@NgModule({
  declarations: [
    UsersComponent,
    HomeComponent,
    FilesComponent,
    SettingsComponent,
    ProductsComponent,
    ProductComponent,
    CategoriesComponent,
    PagesComponent,
    
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CodemirrorModule
  ],
})
export class UsersModule {}
