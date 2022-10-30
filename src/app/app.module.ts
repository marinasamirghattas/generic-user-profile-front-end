import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationModule } from './Modules/confirmation/confirmation.module';
// import { SharedModule } from './Modules/shared/shared.module';
import { SignUpModule } from './Modules/sign-up/sign-up.module';
import { UserListModule } from './Modules/user-list/user-list.module';
import { UserProfileModule } from './Modules/user-profile/user-profile.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    SignUpModule,
    ConfirmationModule,
    UserListModule,
    UserProfileModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
