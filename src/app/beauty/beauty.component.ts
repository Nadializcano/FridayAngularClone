import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beauty } from '../models/beauty.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent  {
  constructor(private router: Router){}

  @Input() childBeauty: Beauty[] = [
    new Beauty("Title Test", 2)
  ];
  @Output() clickSender = new EventEmitter();

  goToDetailPage(clickedBeauty: Beauty) {
       this.router.navigate(['childBeauty', clickedBeauty.id]);
     };
}
