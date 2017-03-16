import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  iconSrc: string;

  constructor() { }

  ngOnInit() {
    this.iconSrc = 'assets/icons.svg#' + this.icon;
  }

}
