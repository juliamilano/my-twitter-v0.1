import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/add/operator/toPromise';

import { Tweet } from './tweetstype';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TweetService {

  private tweetsUrl = 'api/tweets';

  constructor(private http: HttpClient) {}

  //через промисы получение

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

  /*//через Observable получение
  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.tweetsUrl);
  }*/

//через-промисы-добавление
  addTweet(tweet: Tweet): Promise<Tweet> {
    return this.http.post<Tweet>(this.tweetsUrl, tweet, httpOptions).toPromise();
}

// через observable добавление
 /* addTweet(tweet: Tweet): Observable<Tweet> {
    return this.http.post<Tweet>(this.tweetsUrl, tweet, httpOptions).pipe(
     // catchError(this.handleError<Tweet>('addHero'))
    );
  }*/

 //удаление Observable

  delete(tweet: Tweet | number): Promise<Tweet> {
    const id = typeof tweet === 'number' ? tweet : tweet.id;
    const url = `${this.tweetsUrl}/${id}`;

    return this.http.delete<Tweet>(url, httpOptions).toPromise();

   //const id = typeof tweet === 'number' ? hero : hero.id;
  //  return this.http.delete<Tweet>('${this.tweetsUrl} + ${id}', httpOptions).toPromise();
  //  console.log(tweet);
    //return this.http.put(this.tweetsUrl, tweet, httpOptions);
  //  return this.http.post<Tweet>(this.tweetsUrl, tweet, httpOptions).toPromise();
  }


}
