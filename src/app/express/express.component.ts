import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.scss']
})
export class ExpressComponent implements OnInit {
  node:any = "../assets/8.png";
  node_functionality:any = "../assets/express_diagram.png";
 
  constructor() { }

  ngOnInit() {
  }

}
