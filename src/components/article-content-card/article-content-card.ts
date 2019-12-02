import { Component, Input } from '@angular/core';
@Component({
  selector: 'article-content-card',
  templateUrl: 'article-content-card.html'
})
export class ArticleContentCardComponent {

  @Input() obj
  constructor() {

  }

}
