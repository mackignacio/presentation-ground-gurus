import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  angular:any = "../assets/angular-icon.svg";
  angular_function:any = "../assets/4.png";
  constructor() { }

  ngOnInit() {
  }

}
