import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content-block',
  templateUrl: './main-content-block.component.html',
  styleUrls: ['./main-content-block.component.css']
})


export class MainContentBlockComponent implements OnInit {
  tweets: [{name: string, link: string, time: string, text: string}] = [{
    name: "Ford",
    link: "@mail",
    time: "1h22m",
    text: "Привет."
  },
    {
    name: "Ford",
    link: "@mail",
    time: "1h52m",
    text: "Привет.новпкркерерапраправр"
  },
    {
    name: 'Ford',
    link: "@mail",
    time: "2h42m",
    text: "liverpool dhngghhmdghmfffffffff роенове евоевоппо ен енеоенл лен."
  }];

  addTweets(tweet:{name: string, link: string, time: string, text: string}){
    this.tweets.unshift(tweet);
  }

  constructor() { }

  ngOnInit() {
  }

}
