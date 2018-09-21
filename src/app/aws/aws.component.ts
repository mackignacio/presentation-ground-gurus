import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.scss']
})
export class AwsComponent implements OnInit {
  node:any = "../assets/9.png";
  node_functionality:any = "../assets/aws_diagram.png";
 
  constructor() { }

  ngOnInit() {
  }

}
