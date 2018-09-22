import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  current_slide = 1;
  max = 31;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeSlides(val) {
    this.current_slide = this.current_slide + val;
    console.log(this.current_slide);
    if (this.current_slide > 0 && this.current_slide < this.max) {
      this.router.navigate([`main/${this.current_slide}`]);
    }else{
      this.current_slide = 1;
    }

  }

}
