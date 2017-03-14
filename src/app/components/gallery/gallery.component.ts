import { Component, Input, OnInit } from '@angular/core';

const imageAssetsPath = '/assets/project-images/';

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images;
  @Input() coverImage: string;

  coverImageSrc: string;

  constructor() { }

  ngOnInit() {
    this.coverImageSrc = imageAssetsPath + this.coverImage;
  }

  openLightBox() {
    let imagesArray = this.images.map(image => ({ href: imageAssetsPath + image.src, title: image.title}) );

    (<any>jQuery).swipebox( imagesArray );
  }
}
