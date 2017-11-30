import { Injectable } from '@angular/core';
import { Tweet } from '../Class-types/tweetstype';
import { DatePipe } from '@angular/common';

@Injectable()
export class UserInfoService {

  constructor() { }

  userName = "Nicolas Piu";
  userNameLink = `${this.userName.split(' ').join('').toLowerCase()}`;

  //userTweettime = `${ this.today | date:'shortTime'}`;

  //usertweetInfo: Tweet;

  createNewTweet(text: string): Tweet{
    let today = new Date();
    let userTweettime = `${today.getHours()}h${today.getMinutes()}m`;

    let getRandomArbitary = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let result = getRandomArbitary(15, 150);
    console.log(result);

    let usertweet = {
      id: result,
      name: `${this.userName}`,
      link: `@${this.userNameLink}`,
      time: `${userTweettime}`,
      text: text,
      image: '',
      width: 200,
      alt: '',
      imgAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdMZ2wQnkJTGTlk8PX8zg-OQENGxky2KgWKNYeblAq3GI5Uwm',
      imgAvatarWidth: 60,
      imgAvatarAlt: 'user-name'
    };

    return usertweet;
  }

}
