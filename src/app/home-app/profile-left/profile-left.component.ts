import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../tweetstype';
import { TweetService } from '../../twitter.service';

@Component({
  selector: 'app-profile-left',
  templateUrl: './profile-left.component.html',
  styleUrls: ['./profile-left.component.css']
})
export class ProfileLeftComponent implements OnInit {
  countTweets: number;
  nameUser: string;

  linkUser: string;

  tweets: Tweet[];

  constructor(private tweemService: TweetService) {}

   ngOnInit() {
    this.tweemService.getTweets()
      .then(tweets => this.countTweets = tweets.length);
  }

}
