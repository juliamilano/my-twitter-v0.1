import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { TopUser } from '../Class-types/top-user-type';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TopUsersService {
  private topUserUrl = 'api/topUsers';

  constructor(private http: HttpClient){}

  getTopUsers(): Promise<TopUser[]> {
      return this.http.get<TopUser[]>(this.topUserUrl).toPromise()
        .then(data => {
          console.log(data);
          return data;
        }).catch(error => {
          console.log(error);
          return [];
        });
  }

}
