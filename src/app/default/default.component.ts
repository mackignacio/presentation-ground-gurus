import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  angular6: any = "../assets/1.jpg";
  constructor() { }

  ngOnInit() {
  }

}
