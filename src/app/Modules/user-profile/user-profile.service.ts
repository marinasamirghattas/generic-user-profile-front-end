import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  userProfileData:any;
  constructor() {
    this.userProfileData=[];
   }
}
