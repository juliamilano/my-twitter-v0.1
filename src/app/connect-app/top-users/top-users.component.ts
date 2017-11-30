import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.css']
})
export class TopUsersComponent implements OnInit {
  @Input() topUserInfo: {};

  constructor() { }

  ngOnInit() {
  }

}
