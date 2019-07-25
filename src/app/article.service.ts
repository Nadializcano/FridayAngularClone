import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.articles = database.list('articles');
}

  getArticles() {
    return this.articles;
  }

  getArticleById(articleId: string){
    return this.database.object('articles/' + articleId);
  }

  addArticle(newArticle: Article){
    this.articles.push(newArticle);
  }

  updateArticle(localUpdatedArticle){
    var articleEntryInFirebase = this.getArticleById(localUpdatedArticle.$key);
    articleEntryInFirebase.update({category: localUpdatedArticle.category,
                                  title: localUpdatedArticle.title,                                  
                                  description: localUpdatedArticle.description,});
  }

}
