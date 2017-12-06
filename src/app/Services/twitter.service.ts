import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/add/operator/toPromise';

import { Tweet } from '../Class-types/tweetstype';
import { UserInfoService } from './user-info.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TweetService {

  private tweetsUrl = 'api/tweets';

  constructor(private http: HttpClient, private userInfoService: UserInfoService) {}
  tweetsFilter: Tweet[];
  buttonUserTopSubscribe = false;

  getTweets(): Promise<Tweet[]> {
    return this.http.get<Tweet[]>(this.tweetsUrl).toPromise()
      .then(data => {
        console.log(data);
        return data;
      }).catch(error => {
        console.log(error);
        return [];
      });
  }

  addTweet(tweet: Tweet): Promise<Tweet> {
    return this.http.post<Tweet>(this.tweetsUrl, tweet, httpOptions).toPromise();
}

  delete(tweet: Tweet | number): Promise<Tweet> {
    const id = typeof tweet === 'number' ? tweet : tweet.id;
    const url = `${this.tweetsUrl}/${id}`;

    return this.http.delete<Tweet>(url, httpOptions).toPromise();
  }


}
