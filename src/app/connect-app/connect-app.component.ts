import { Component, OnInit } from '@angular/core';
//import {log} from "util";
import { TopUser } from '../Class-types/top-user-type';


@Component({
  selector: 'connect-app',
  templateUrl: './connect-app.component.html',
  styleUrls: ['./connect-app.component.css']
})

export class ConnectAppComponent implements OnInit {

  topUsers: TopUser[] = [{
    id: 72,
    name: "Masha Korobkina",
    imgLink: "",
    ingSize: 20,
    topNumber: 1297,
    textContent: "Lorem1hnhgncghngn h fghgh"
  },{
    id: 38,
    name: "Abrhhhha Cadabra",
    imgLink: "",
    ingSize: 20,
    topNumber: 897,
    textContent: "Lorem1hnhgncghngn h fghgh"
  },{
    id: 128,
    name: "Abra Cadabra",
    imgLink: "",
    ingSize: 20,
    topNumber: 899,
    textContent: "Lorem1452452452"
  },{
    id: 100,
    name: "Cadabra Cadabra",
    imgLink: "",
    ingSize: 20,
    topNumber: 532,
    textContent: "Lorem477838387"
  },{
    id: 85,
    name: "Santa Cadabra",
    imgLink: "",
    ingSize: 20,
    topNumber: 933,
    textContent: "Lorem444"
  },{
    id: 40,
    name: "Piu Cadabra",
    imgLink: "",
    ingSize: 20,
    topNumber: 799,
    textContent: "Lorem5555"
  },{
    id: 27,
    name: "Koul Duglas",
    imgLink: "",
    ingSize: 20,
    topNumber: 1696,
    textContent: "Lorem5555"
  }];

  clickFn(item: TopUser){
    console.log(item.name);
  }
  constructor() { }

  ngOnInit() {
  }

}
