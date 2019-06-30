import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Beauty } from '../models/beauty.model';
import { BeautyService} from '../beauty.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-beauty-detail',
  templateUrl: './beauty-detail.component.html',
  styleUrls: ['./beauty-detail.component.css'],
  providers: [BeautyService]
})
export class BeautyDetailComponent implements OnInit {
  beautyId: string;
  beautyToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private beautyService: BeautyService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.beautyId = urlParameters['id'];
    });
    this.beautyToDisplay = this.beautyService.getBeautyById(this.beautyId);
  }


}
