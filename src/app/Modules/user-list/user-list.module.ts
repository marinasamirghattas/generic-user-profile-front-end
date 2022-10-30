import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListRoutingModule } from './user-list-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import {MatButtonModule}from '@angular/material/button'


@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MatButtonModule
  ],
  exports:[UsersListComponent]
})
export class UserListModule { }
