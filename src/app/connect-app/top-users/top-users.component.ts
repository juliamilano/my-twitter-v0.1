import { Component, OnInit, Input } from '@angular/core';
import {Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-users',
  templateUrl: './top-users.component.html',
  styleUrls: ['./top-users.component.css']
})
export class TopUsersComponent implements OnInit {
  @Input() topUserInfo: {};


  ngOnInit() {
  }

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  openCarsPage() {
    //  this.router.navigate(['connect-app'], (relativeTo: this.route));
  }
}
