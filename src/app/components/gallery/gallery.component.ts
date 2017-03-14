import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images;

  coverImageSrc: string;

  constructor() { }

  ngOnInit() {
    if(Array.isArray(this.images) && this.images.length > 0) {
      this.coverImageSrc = '/assets/project-images/' + this.images[0];
    } 
  }

  openLightBox() {
    console.log('openLightBox');
  }
}
