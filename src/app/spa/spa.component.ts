import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss']
})
export class SpaComponent implements OnInit {
  spa:any = "../assets/3.png";
  spa_function:any = "../assets/spa_function.png";
  constructor() { }

  ngOnInit() {
  }

}
