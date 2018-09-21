import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.scss']
})
export class MongoComponent implements OnInit {
  node:any = "../assets/6.jpg";
  node_functionality:any = "../assets/mongodb_diagram.png";
  constructor() { }

  ngOnInit() {
  }

}
