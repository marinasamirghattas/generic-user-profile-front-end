
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { map, Observable, startWith } from 'rxjs';
import { GenericAPIHandlerService } from 'src/app/services/generic-apihandler.service';
import { UserProfileService } from '../user-profile.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  //userProfileForm:FormGroup;
  options: any[] = [];
  //filteredOptions: Observable<string[]>;

  constructor(private fb:FormBuilder,private genericAPIHandler:GenericAPIHandlerService,private userProfileService:UserProfileService) {
   
   }
   userProfileForm=this.fb.group({
    firstNameFormControl:['',[Validators.required]],
    lastNameFormControl:['',[Validators.required]],
    ageFormControl:['',[Validators.required,Validators.min(8)]],
    counryOfBirthFormControl:['',[Validators.required]],
    addressFormControl:['',[Validators.required]],
  })

 filteredOptions=this.userProfileForm.controls['counryOfBirthFormControl'].valueChanges.pipe(
       startWith(''),
       map(value => this._filter(value || '')),
     );  
   matcher = new MyErrorStateMatcher();
   

  ngOnInit(): void {
  this.genericAPIHandler.getAll().subscribe((data:any)=>{data.forEach((e:any) => {
    this.options.push(e.countryName)
  })},(error)=>{
console.log(error)
  })
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit(){
    console.log(this.userProfileForm.value)
    this.userProfileService.userProfileData=this.userProfileForm.value;
    console.log('from servece 2',this.userProfileService.userProfileData)
   }
}
