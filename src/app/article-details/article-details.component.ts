import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Beauty } from '../models/beauty.model';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  beautyId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.beautyId = parseInt(urlParameters['id']);
    });
  }


}
