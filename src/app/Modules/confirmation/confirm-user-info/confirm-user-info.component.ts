import { Component, OnInit } from '@angular/core';
import { MatCardLgImage } from '@angular/material/card';

import { ConfimInfoService } from '../confim-info.service';

@Component({
  selector: 'app-confirm-user-info',
  templateUrl: './confirm-user-info.component.html',
  styleUrls: ['./confirm-user-info.component.css']
})
export class ConfirmUserInfoComponent implements OnInit {
dataFromSignUp:any;
dataFromUserProfile:any;
usersData:any;
  constructor(confimInfoService:ConfimInfoService) {
    this.dataFromSignUp=confimInfoService.basic;
    this.dataFromUserProfile=confimInfoService.advanced;
    this.usersData=confimInfoService.fullUserData
    console.log(this.dataFromSignUp,"dataFromSignUp")
    console.log(this.dataFromUserProfile,"dataFromUserProfile")
    console.log(this.usersData,'all data')
   }

  ngOnInit(): void {
  }

}
