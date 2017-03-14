import { Component, OnInit } from '@angular/core';

import { project } from '../../data';

@Component({
  selector: 'project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent implements OnInit {
  project = project;
  
  constructor() { }

  ngOnInit() {
  }

}
