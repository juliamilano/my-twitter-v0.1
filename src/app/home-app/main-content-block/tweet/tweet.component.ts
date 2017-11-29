import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../../../tweetstype';
import { TweetService } from '../../../twitter.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweetItem: Tweet;

  tweets: Tweet[];

  constructor(private tweetService: TweetService) {}

  getTweets(): void {
    this.tweetService.getTweets()
      .subscribe(tweet => this.tweets = tweet);
  }

  ngOnInit() {
    this.getTweets();
  }

  /*deleteTweet(tweet: number): void {
     for ( let i = 0; i < this.tweets.length; i++ ) {
      if ( this.tweets[i].id == tweet ) {
        this.tweets.splice(i, 1);
      }
    }
    let tweetMark = this.tweets;

   // let this.tweets = this.tweets.filter(tweet => this.tweets !== tweet);
    this.tweetService.delete<Tweet>(tweetMark).then((tweet) => {console.log(tweet)});

  }
}*/
  deleteTweet(tweet: Tweet): void {
    this.tweets = this.tweets.filter(h => h !== tweet);
    this.tweetService.delete(tweet);
  }
}
