import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path:'',component:LandingPageComponent },
  //{ path: '', redirectTo: 'login-register', pathMatch: 'full' },
  {
    path: 'login-register',
    loadChildren: () =>
      import('./login-register/login-register.module').then(
        (m) => m.LoginRegisterModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
