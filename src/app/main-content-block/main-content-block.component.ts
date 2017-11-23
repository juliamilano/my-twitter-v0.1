import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content-block',
  templateUrl: './main-content-block.component.html',
  styleUrls: ['./main-content-block.component.css']
})


export class MainContentBlockComponent implements OnInit {
  tweets: [{name: string, link: string, time: string, text: string, image: string, width: number, alt: string}] = [{
    name: "Andy Ford",
    link: "@andy-ford",
    time: "1h22m",
    text: "Привет.",
    image: "assets/img/slider.jpg",
    width: 400,
    alt: "1"
  },
    {
    name: "Deive Kurban",
    link: "@i_am_big",
    time: "1h52m",
    text: "Привет.новпкркерерапраправр",
    image: 'assets/img/slider2.jpg',
    width: 400,
    alt: '2'
  },
    {
    name: 'Maria Velverde',
    link: "@ma_shka",
    time: "2h42m",
    text: "liverpool dhngghhmdghmfffffffff роенове евоевоппо ен енеоенл лен.",
    image: "assets/img/slider3.jpg",
    width: 400,
    alt: "3"
  }];

  addTweets(tweet:{name: string, link: string, time: string, text: string, image: string, width: number, alt: string}){
    this.tweets.unshift(tweet);
  }

  constructor() { }

  ngOnInit() {
  }

}
