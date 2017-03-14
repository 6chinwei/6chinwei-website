import { Component, OnInit } from '@angular/core';

import { experience, skill, education } from '../../data';

@Component({
  selector: 'info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent implements OnInit {
  experience = experience;
  skill = skill;
  education = education;

  constructor() { }

  ngOnInit() {
  }

}
