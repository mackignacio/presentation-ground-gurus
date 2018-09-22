import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npm',
  templateUrl: './npm.component.html',
  styleUrls: ['./npm.component.scss']
})
export class NpmComponent implements OnInit {
  node:any = "../assets/5.png";
  node_functionality:any = "../assets/node_functionality.png";
 
  constructor() { }

  ngOnInit() {
  }

}
