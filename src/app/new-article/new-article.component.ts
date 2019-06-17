import { Component, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {
  @Output() sendArticle = new EventEmitter();

  submitForm(title: string) {
    let newArticle: Article = new Article(title);
    this.sendArticle.emit(newArticle);
  }

  constructor() { }



}
