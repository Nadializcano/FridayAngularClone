import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/article.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticleService]
})
export class AdminComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  submitArticle(category: string, title: string, description: string){
    var newArticle: Article = new Article(category, title, description, this.imageSrc);
    this.articleService.addArticle(newArticle);
  }

  private imageSrc: string = '';

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }

}
