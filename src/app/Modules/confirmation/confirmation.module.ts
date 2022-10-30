import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmUserInfoComponent } from './confirm-user-info/confirm-user-info.component';
import { UserConfirmationRoutingModule } from './user-confirmation-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule}from '@angular/material/button'




@NgModule({
  declarations: [
    ConfirmUserInfoComponent
  ],
  imports: [
    CommonModule,
    UserConfirmationRoutingModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],exports:[
    ConfirmUserInfoComponent
  ]
})
export class ConfirmationModule { }
