import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-left',
  templateUrl: './profile-left.component.html',
  styleUrls: ['./profile-left.component.css']
})
export class ProfileLeftComponent implements OnInit {
  oountTweets = 0;
  constructor() { }

  ngOnInit() {
  }

}
