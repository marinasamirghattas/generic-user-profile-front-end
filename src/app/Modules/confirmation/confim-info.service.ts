import { Injectable } from '@angular/core';
import { SignUpService } from '../sign-up/sign-up.service';
import { UserProfileService } from '../user-profile/user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class ConfimInfoService {
  basic: any;
  advanced: any;
  fullUserData!: any[];
  constructor(userProfileService: UserProfileService, signUpService: SignUpService) {
    this.basic = signUpService.userData;
    this.advanced = userProfileService.userProfileData
    if (this.fullUserData == undefined) {
      this.fullUserData = [];
      this.fullUserData.push({ userName: this.basic.userNameFormControl, basic: this.basic, advanced: this.advanced });

    } else {
      this.fullUserData.push({ userName: this.basic.userNameFormControl, basic: this.basic, advanced: this.advanced })

    }

    console.log(this.basic, 'fro confirm')
    console.log(this.advanced, 'fro confirm')
  }

}
