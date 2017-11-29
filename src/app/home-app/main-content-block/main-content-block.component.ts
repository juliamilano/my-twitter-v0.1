import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../tweetstype';
import { TweetService } from '../../twitter.service';



@Component({
  selector: 'app-main-content-block',
  templateUrl: './main-content-block.component.html',
  styleUrls: ['./main-content-block.component.css']
})


export class MainContentBlockComponent implements OnInit {
  textUserEnter = "";

  tweets: Tweet[];

  constructor(private tweetService: TweetService) { }

 /* usertweet = {
    name: 'User Name',
    link: "@user_name",
    time: "0h01m",
    text: '',
    image: '',
    width: 200,
    alt: '4',
    imgAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdMZ2wQnkJTGTlk8PX8zg-OQENGxky2KgWKNYeblAq3GI5Uwm',
    imgAvatarWidth: 60,
    imgAvatarAlt: "user-name"
  };*/

  createNewTweet(text: string): Tweet{
      let getRandomArbitary = (min: number, max: number) =>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      let result = getRandomArbitary(20, 120);
      console.log(result);

    let usertweet = {
      id: result,
      name: 'User Name',
      link: "@user_name",
      time: "0h01m",
      text: text,
      image: '',
      width: 200,
      alt: '',
      imgAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdMZ2wQnkJTGTlk8PX8zg-OQENGxky2KgWKNYeblAq3GI5Uwm',
      imgAvatarWidth: 60,
      imgAvatarAlt: "user-name"
    }
    return usertweet;
  }

//метод получения героев через промисы
/*   getTweets(): void {
    this.tweetService.getTweets()
      .then(data => this.tweets = data);
  }*/

  //метод получения героев через observable

  getTweets(): void {
    this.tweetService.getTweets()
      .subscribe(tweet => this.tweets = tweet);
  }

  // метод добавление через промисы

  addTweet(): void {
    let createdTweet = this.createNewTweet(this.textUserEnter);
    this.tweetService.addTweet(createdTweet).then((tweet) => {
      this.tweets.unshift(createdTweet);
    });
    this.textUserEnter = '';
  }
  addTweetEnter(event: KeyboardEvent){
    this.addTweet();
  }
  //  метод добавление через observable
  /*addTweet(text: string): void {
    let createdTweet = this.createNewTweet(this.textUserEnter);
    this.tweetService.addTweet(createdTweet).subscribe(tweet => {
      this.tweets.unshift(createdTweet);
      });
  }
*/

  ngOnInit() {
    this.getTweets();
  }

}
