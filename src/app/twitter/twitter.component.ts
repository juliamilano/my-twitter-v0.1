import { Component, OnInit } from '@angular/core';
import { TweetService } from '../Services/twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
  }
  changeFilterNewsTopUsers() {
    this.tweetService.buttonUserTopSubscribe = false;
  }
}
