import { Component, OnInit , OnChanges} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Tweet } from '../../Class-types/tweetstype';
import { TweetService } from '../../Services/twitter.service';
import { UserInfoService } from '../../Services/user-info.service';


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
  //visibility: string = 'shown';

  //ngOnChanges() {
  //  this.visibility = this.viewP ? 'shown' : 'hidden';
  //}

  constructor(private tweetService: TweetService, private userInfoService: UserInfoService) { }
   getTweets(): void {
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

    addTweet(): void {
      let createdTweet = this.userInfoService.createNewTweet(this.textUserEnter);
      this.tweetService.addTweet(createdTweet).then((tweet) => {
        this.tweets.unshift(createdTweet);
      });
      this.textUserEnter = '';
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

    ngOnInit() {
      this.getTweets();
    }



}
