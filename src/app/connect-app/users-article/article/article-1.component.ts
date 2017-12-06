import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Subscribe } from '../../../Class-types/subscribes';
import { SubscribeServices } from '../../../Services/subscribe.services';

@Component({
  selector: 'app-article-1',
  templateUrl: './article-1.component.html',
  styleUrls: ['./article-1.component.css']
})
export class Article1Component implements OnInit {
  id: number;
  name: string;

  followUserArray: Subscribe[];

  constructor(private route: ActivatedRoute, private subscribeServices: SubscribeServices) { }

  addInMyFavorite(){
      this.followUser(this.id, this.name);
  }

  followUser(id: number, name: string): void {
    const subscribe: Subscribe = {id: id, name: name};
    this.subscribeServices.followUser(subscribe)
      .then((data)=>{
      //console.log(" передал id в массив ");
    });
  }

  getFollowUser(){
      this.subscribeServices.getFollowUser()
        .then((data) => {
        this.followUserArray = data;
        //console.log(data, this.followUser);
      });
    }

    ngOnInit() {
      //this.id = +this.route.snapshot.params["id"];
       this.getFollowUser();

      this.route.params.subscribe((params: Params) => {
       // console.log(params);
        this.id = +params['id'];
      });

      this.route.queryParams.subscribe((params: Params) => {
        this.name = params['name'];
        });
  }

}
