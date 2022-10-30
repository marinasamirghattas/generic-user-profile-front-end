import { Component, Input, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { SignUpService } from '../sign-up.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
matcher = new MyErrorStateMatcher();
//signUpForm!:FormGroup;

  constructor(public signUpService:SignUpService) {
    
   }
   
   
  ngOnInit(): void {
  }
 signUpForm = new FormGroup({
    userNameFormControl:new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern(new RegExp(/^[a-z]+$/))]),
    fullNameFormControl:new FormControl('', [Validators.required,Validators.pattern(new RegExp(/^[a-zA-Z]+$/))]),
    passwordFormControl:new FormControl('', [Validators.required,Validators.pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/))])
      })

      onSubmit(){
        console.log(this.signUpForm.value)
        this.signUpService.userData=this.signUpForm.value
        console.log('from servise 1',this.signUpService.userData)
        }

}
