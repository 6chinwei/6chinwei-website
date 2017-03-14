import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent implements OnInit {
  @Input() url: string;
  @Input() icon: string;
  iconSrc: string;

  ngOnInit() {
    this.iconSrc = 'assets/icons/' + this.icon + '.svg';
  }

}
