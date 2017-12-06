import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../Class-types/tweetstype';
import { Subscribe } from '../../Class-types/subscribes';
import { TweetService } from '../../Services/twitter.service';
import { UserInfoService } from '../../Services/user-info.service';
import { SubscribeServices } from '../../Services/subscribe.services';

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
  followUsers: Subscribe[];
  tweets: Tweet[] = new Array();


  constructor(private tweemService: TweetService,
              private userInfoService: UserInfoService,
              private subscribeServices: SubscribeServices){}

  getFollowUsers(){
    this.subscribeServices.getFollowUser()
      .then((data)=>{
        this.followUsers = data;
      });
  }


  tweetsFilterName(id: number){
    const tweetsFilter: Array<Tweet> = [];
    for(let i = 0; i < this.tweets.length; i++){
      if(this.tweets[i].id === id ){
        tweetsFilter.push(this.tweets[i]);
      }

    }
    console.log(tweetsFilter);
    this.tweemService.tweetsFilter = tweetsFilter;
    this.tweemService.buttonUserTopSubscribe = true;
    return tweetsFilter;

   // this.subscribeServices.selectUserTweetID = id;
  }

   ngOnInit() {
      this.subscribeServices.getFollowUser()
       .then((data)=>{
         this.followUsers = data;
         //console.log(data);
       });
      this.tweemService.getTweets()
      .then(tweets => {
        this.countTweets = tweets.length;
        this.tweets = tweets;
      });
    this.nameUser = this.userInfoService.userName;
    this.linkUser = this.userInfoService.userNameLink;
  }

}
