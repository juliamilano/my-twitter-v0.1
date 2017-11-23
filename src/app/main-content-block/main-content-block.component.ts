import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content-block',
  templateUrl: './main-content-block.component.html',
  styleUrls: ['./main-content-block.component.css']
})


export class MainContentBlockComponent implements OnInit {
  textUserEnter = "";

  tweets: [{name: string, link: string, time: string, text: string, image: string, width: number, alt: string, imgAvatar: string, imgAvatarWidth: number, imgAvatarAlt: string}] =
    [{name: "Andy Ford",
    link: "@andy-ford",
    time: "1h22m",
    text: "Привет.",
    image: "assets/img/slider.jpg",
    width: 400,
    alt: "1",
    imgAvatar: "https://www.w3schools.com/w3images/avatar2.png",
    imgAvatarWidth: 60,
    imgAvatarAlt: "Andy Ford"
  },
    {
    name: "Deiva Kurban",
    link: "@i_am_girl",
    time: "1h52m",
    text: "Привет.новпкркерерапраправр",
    image: 'assets/img/slider2.jpg',
    width: 400,
    alt: '2',
    imgAvatar: 'https://secure11.securewebexchange.com/hardsignal.com/images/img_avatar2.png',
    imgAvatarWidth: 60,
    imgAvatarAlt: "Deiva"
  },
    {
    name: 'Maria Velverde',
    link: "@ma_shka",
    time: "2h42m",
    text: "liverpool dhngghhmdghmfffffffff роенове евоевоппо ен енеоенл лен.",
    image: "assets/img/slider3.jpg",
    width: 400,
    alt: "3",
    imgAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2R4EhRk9s6eijGUmAqeQCAAbzwVZ1JH1qlEw5umQdcf0NOZhg',
    imgAvatarWidth: 60,
    imgAvatarAlt: "Maria"
  }];

  addTweets(){
    this.tweets.unshift({
      name: 'User Name',
      link: "@user_name",
      time: "0h01m",
      text: this.textUserEnter
      image: '',
      width: 200,
      alt: '4',
      imgAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdMZ2wQnkJTGTlk8PX8zg-OQENGxky2KgWKNYeblAq3GI5Uwm',
      imgAvatarWidth: 60,
      imgAvatarAlt: "user-name"
    });
    this.textUserEnter = "";
  }

  constructor() { }

  ngOnInit() {
  }

}
