import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Home";

  selectedArticle = null;

    masterArticleList: [Article] = [
      new Article('Food'),
      new Article ('Beauty')
    ]

    editArticle(clickedArticle){
      this.selectedArticle = clickedArticle;
    }

    finishedEditing(){
      this.selectedArticle = null;
    }

    addArticle(newArticle: Article) {
      this.masterArticleList.push(newArticle);
    }
}
