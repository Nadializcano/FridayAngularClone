import { Component, OnInit } from '@angular/core';
import { Beauty } from '../models/beauty.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { BeautyService } from '../beauty.service';


@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css'],
  providers: [BeautyService]
})
export class BeautyComponent implements OnInit {
  beauties: FirebaseListObservable<any[]>;
   currentRoute: string = this.router.url;

  constructor(private router: Router,
     private BeautyService: BeautyService){

     }

  ngOnInit() {
  this.beauties = this.BeautyService.getBeauties();
}

  // Beauties: Beauty[] = [
  //   new Beauty("Title Test", 2)
  // ];

  goToDetailPage(clickedBeauty) {
       this.router.navigate(['beauties', clickedBeauty.$key]);
     };
}
