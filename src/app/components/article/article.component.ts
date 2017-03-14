import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article-component',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
