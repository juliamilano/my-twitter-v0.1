import { Component, OnInit } from '@angular/core';
//import {log} from "util";
import { TopUser } from '../Class-types/top-user-type';
import { TopUsersService } from '../Services/top-users.service';

@Component({
  selector: 'connect-app',
  templateUrl: './connect-app.component.html',
  styleUrls: ['./connect-app.component.css']
})

export class ConnectAppComponent implements OnInit {

  topUsers: TopUser[];

  clickFn(item: TopUser){
    console.log(item.name);
  }
  constructor(private topUsersService: TopUsersService) { }

  getTopUsers(): void{
    this.topUsersService.getTopUsers()
      .then((data) => {this.topUsers = data});
  }

  ngOnInit() {
    this.getTopUsers();
  }


}
