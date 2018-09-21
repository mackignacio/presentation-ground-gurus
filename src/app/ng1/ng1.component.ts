import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng1',
  templateUrl: './ng1.component.html',
  styleUrls: ['./ng1.component.scss']
})
export class Ng1Component implements OnInit {
  ng1:any = "../assets/ng/1.png";
  ng2:any = "../assets/ng/2.png";
  ng3:any = "../assets/ng/3.png";
  ng4:any = "../assets/ng/4.png";
  
 
  constructor() { }

  ngOnInit() {
  }

}
