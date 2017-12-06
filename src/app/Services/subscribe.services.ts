import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscribe } from '../Class-types/subscribes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SubscribeServices {
  private followedUsersUrl = 'api/followedUsers';

  selectUserTweetID: number;

  constructor(private http: HttpClient){}

  followUser(id: Subscribe): Promise<Object> {
    return this.http.post<Subscribe>(this.followedUsersUrl, id, httpOptions).toPromise();
  }

  getFollowUser(): Promise<Subscribe[]> {
    return this.http.get<Subscribe[]>(this.followedUsersUrl).toPromise()
      .then(data => {
        console.log(data);
        return data;
      });
  }

}
