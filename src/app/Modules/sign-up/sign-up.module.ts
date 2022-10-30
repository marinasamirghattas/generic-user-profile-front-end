import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';  
import {MatButtonModule}from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import { SignUpRoutingModule } from './sign-up-routing.module';




@NgModule({
  declarations: [
    SignUpComponent
  ],
  exports:[
    SignUpComponent
  ],
  imports: [
    
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    SignUpRoutingModule,
    
  ]
})
export class SignUpModule { }
