import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmUserInfoComponent } from './confirm-user-info/confirm-user-info.component';

const routes: Routes = [
  {
    path: '',
    component: ConfirmUserInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserConfirmationRoutingModule {

 

 }
