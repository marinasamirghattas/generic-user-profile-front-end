import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Modules/sign-up/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component: SignUpComponent
  },
  {
    path:'userProfile',
    loadChildren: () => import('./Modules/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  {
    path: 'infoConfirmation',
    loadChildren: () => import('./Modules/confirmation/confirmation.module').then(m => m.ConfirmationModule)
  },
  {
    path: 'usersList',
    loadChildren: () => import('./Modules/user-list/user-list.module').then(m => m.UserListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   


 }
