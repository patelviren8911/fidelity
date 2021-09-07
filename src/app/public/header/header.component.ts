import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import {ManageUserService} from 'src/app/services/manage-user.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userProfile?: User;
  constructor(public utilService: UtilService, private manageUser: ManageUserService) { }

  ngOnInit(): void {
  }

   getUserProfile(){
     this.manageUser.getUser()
     .subscribe(
       response => {
        this.userProfile = response;
       }
     );
   }

}
