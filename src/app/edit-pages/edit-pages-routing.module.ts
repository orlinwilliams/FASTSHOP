import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPagesComponent } from './edit-pages.component';

const routes: Routes = [{ path: '', component: EditPagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPagesRoutingModule { }
