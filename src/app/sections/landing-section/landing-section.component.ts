import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss']
})
export class LandingSectionComponent implements OnInit {
  imageSrc: string = 'assets/ChinWeiLiu.svg';

  constructor() { }

  ngOnInit() {
  }

}
