import { Component, OnInit , OnChanges} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Tweet } from '../../Class-types/tweetstype';
import { Subscribe } from '../../Class-types/subscribes';
import { TweetService } from '../../Services/twitter.service';
import { UserInfoService } from '../../Services/user-info.service';
import { SubscribeServices } from '../../Services/subscribe.services';

@Component({
  selector: 'app-main-content-block',
  templateUrl: './main-content-block.component.html',
  /*animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => shown', animate('1500ms ease-in'))
    ])
  ],*/
  styleUrls: ['./main-content-block.component.css']
})


export class MainContentBlockComponent implements OnInit {
  textUserEnter = "";

  tweets: Tweet[];

  viewP: Boolean = true;

  followUsers: Subscribe[];

  //visibility: string = 'shown';

  //ngOnChanges() {
  //  this.visibility = this.viewP ? 'shown' : 'hidden';
  //}

  constructor(private tweetService: TweetService,
              private userInfoService: UserInfoService,
              private subscribeServices: SubscribeServices) { }


      getTweets(): void {
        if(this.tweetService.buttonUserTopSubscribe){
          this.tweets = this.tweetService.tweetsFilter;
        }else{
        this.tweetService.getTweets()
          .then(data => this.tweets = data.sort(function(a, b){
            if(a.id < b.id){
              return 1;
            }
            if(a.id > b.id){
              return 0;
            }
            return 0;
          }));
        }
      }



    addTweet(): void {
    if ( this.textUserEnter.length !== 0 && (/\s{2,}/.test(this.textUserEnter) !== true)) {
      let createdTweet = this.userInfoService.createNewTweet(this.textUserEnter);
        this.tweetService.addTweet(createdTweet).then((tweet) => {
          this.tweets.unshift(createdTweet);
        });
        this.textUserEnter = '';
      }
    }


    addTweetEnter(event: KeyboardEvent){
      this.addTweet();
    }

    onFocus(){
      this.viewP = false;
    }
    onBlur(){
      setTimeout(()=>{
        this.viewP = true;
      } , 1000)
    }

    // получение подписок и фильтрация

  selectUserTweetID: number;

  getFollowUser(){
    this.subscribeServices.getFollowUser()
      .then((data)=>{
        this.followUsers = data;

        console.log(this.followUsers);
      })
    /*.then((data)=> {
      if(this.subscribeServices.selectUserTweetID){
        this.selectUserTweetID = this.subscribeServices.selectUserTweetID;
      }
      this.tweets = this.tweets.filter(function(number) {
       for(var b = 0; b < this.tweets.length, b++){
        // return selectUserTweetID == this.tweets[b].id;
        return this.tweets.id;
        };
      });

    });*/
  }

    ngOnInit(){
      this.getFollowUser();
      this.getTweets();
    }



}
