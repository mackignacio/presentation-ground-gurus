import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2',
  templateUrl: './ng2.component.html',
  styleUrls: ['./ng2.component.scss']
})
export class Ng2Component implements OnInit {
  ng4:any = "../assets/ng/4.png";
  ng5:any = "../assets/ng/5.png";
  constructor() { }

  ngOnInit() {
  }

}
