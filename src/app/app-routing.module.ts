import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {LoginUserGuard} from '../app/guards/login-user.guard';
import {LoginAdminGuard} from '../app/guards/login-admin.guard'

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-register/login-register.module').then(
        (m) => m.LoginRegisterModule
      ),
  },
  {
    path: 'admin-companies',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
      canActivate:[LoginUserGuard]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admins/admins.module').then((m) => m.AdminsModule),
      canActivate:[LoginAdminGuard]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'admin-companies/pages/page', loadChildren: () => import('./edit-pages/edit-pages.module').then(m => m.EditPagesModule) },
  
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
