import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../Class-types/tweetstype';
import { TweetService } from '../../Services/twitter.service';
import { UserInfoService } from '../../Services/user-info.service';

@Component({
  selector: 'app-profile-left',
  templateUrl: './profile-left.component.html',
  styleUrls: ['./profile-left.component.css']
})
export class ProfileLeftComponent implements OnInit {
  countTweets: number;
  nameUser: string;
  linkUser: string;

  tweet: Tweet[];

  constructor(private tweemService: TweetService, private userInfoService: UserInfoService) {}


   ngOnInit() {
    this.tweemService.getTweets()
      .then(tweets => this.countTweets = tweets.length);
    this.nameUser = this.userInfoService.userName;
    this.linkUser = this.userInfoService.userNameLink;
  }

}
