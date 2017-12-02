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
    link: "app-article-1",
    textContent: "Lorem1hnhgncghngn h fghgh"
  },{
    id: 38,
    name: "Abrhhhha Cadabra",
    imgLink: "",
    ingSize: 20,
    topNumber: 897,
    link: "app-article-2",
    textContent: "Lorem1hnhgncghngn h fghgh"
  },{
    id: 128,
    name: "Abra Cadabra",
    imgLink: "",
    ingSize: 20,
    topNumber: 899,
    link: "app-article-3",
    textContent: "Lorem1452452452"
  },{
    id: 100,
    name: "Cadabra Cadabra",
    imgLink: "",
    ingSize: 20,
    topNumber: 532,
    link: "app-article-4",
    textContent: "Lorem477838387"
  },{
    id: 85,
    name: "Santa Cadabra",
    imgLink: "",
    ingSize: 20,
    topNumber: 933,
    link: "app-article-5",
    textContent: "Lorem444"
  },{
    id: 40,
    name: "Piu Cadabra",
    imgLink: "",
    ingSize: 20,
    topNumber: 799,
    link: "app-article-6",
    textContent: "Lorem5555"
  },{
    id: 96,
    name: "Stefan Batoriy",
    imgLink: "",
    ingSize: 20,
    topNumber: 1706,
    link: "app-article-7",
    textContent: "Lorem5555"
  },{
    id: 17,
    name: "Mia Nia",
    imgLink: "",
    ingSize: 20,
    topNumber: 1136,
    link: "app-article-7",
    textContent: "Lorem5555"
  },{
    id: 27,
    name: "Max Lulli",
    imgLink: "",
    ingSize: 20,
    topNumber: 1696,
    link: "app-article-7",
    textContent: "Lorem5555"
  }, {
    id: 34,
    name: "Maria Casino",
    imgLink: "",
    ingSize: 20,
    topNumber: 1400,
    link: "app-article-7",
    textContent: "Lorem5555"
  }];

  clickFn(item: TopUser){
    console.log(item.name);
  }
  constructor() { }

  ngOnInit() {
  }


}
