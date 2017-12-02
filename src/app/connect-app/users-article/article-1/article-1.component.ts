import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-article-1',
  templateUrl: './article-1.component.html',
  styleUrls: ['./article-1.component.css']
})
export class Article1Component implements OnInit {
  id: number;
  name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      //this.id = +this.route.snapshot.params["id"];

      this.route.params.subscribe((params: Params) => {
        console.log(params);
        this.id = +params['id'];
      });

      this.route.queryParams.subscribe((params: Params) => {
        this.name = params['name'];
        })
  }

}
