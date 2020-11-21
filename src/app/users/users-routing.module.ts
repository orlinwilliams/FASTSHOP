import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FilesComponent } from './files/files.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'files',
        component: FilesComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/:id',
        component: ProductComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'pages',
        component: PagesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
