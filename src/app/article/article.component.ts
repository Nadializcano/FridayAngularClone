import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
   currentRoute: string = this.router.url;

  constructor(private router: Router,
     private ArticleService: ArticleService) {}

  ngOnInit() {
  this.articles = this.ArticleService.getArticles();
}

  goToDetailPage(clickedArticle) {
       this.router.navigate(['articles', clickedArticle.$key]);
     };
}
