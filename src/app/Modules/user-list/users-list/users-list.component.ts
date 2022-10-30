import { Component, OnInit } from '@angular/core';
import { ConfimInfoService } from '../../confirmation/confim-info.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  allUsers:any=this.confimInfoService.fullUserData
  constructor(private confimInfoService:ConfimInfoService) {
   }
  
   
   removeUser(userName:string){
    for(let i in this.allUsers){
   if(this.allUsers[i].userName==userName){
  this.allUsers.splice(i,1)
  console.log(this.allUsers,'after remove')
    }
    }

   }
  ngOnInit(): void {
  }

}
