import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  node:any = "../assets/2.png";
  node_functionality:any = "../assets/node_functionality.png";
  constructor() { }

  ngOnInit() {
  }

}
