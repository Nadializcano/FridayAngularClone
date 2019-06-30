import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Beauty } from '../models/beauty.model';
import { BeautyService} from '../beauty.service';


@Component({
  selector: 'app-beauty-detail',
  templateUrl: './beauty-detail.component.html',
  styleUrls: ['./beauty-detail.component.css']
})
export class BeautyDetailComponent implements OnInit {
  beautyId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.beautyId = parseInt(urlParameters['id']);
    });
  }


}
