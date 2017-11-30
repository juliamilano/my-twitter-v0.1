import { Injectable } from '@angular/core';
import { Tweet } from './tweetstype';

@Injectable()
export class UserInfoService {

  constructor() { }

  createNewTweet(text: string): Tweet{
    let getRandomArbitary = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
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
      imgAvatarAlt: 'user-name'
    };
    return usertweet;
  }
}
