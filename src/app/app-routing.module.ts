import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {LoginUserGuard} from '../app/guards/login-user.guard'

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
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
