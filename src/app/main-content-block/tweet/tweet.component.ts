import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() tweetItem: {name: string, link: string, time: string, text: string, image: string, width: number, alt: string};
  constructor() { }

  ngOnInit() {
  }

}
