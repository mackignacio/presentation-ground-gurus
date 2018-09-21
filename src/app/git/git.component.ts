import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {
  node:any = "../assets/7.png";
  node_functionality:any = "../assets/git_diagram.png";
 
  constructor() { }

  ngOnInit() {
  }

}
