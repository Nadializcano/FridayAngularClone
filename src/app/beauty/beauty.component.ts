import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beauty } from '../models/beauty.model';


@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent  {

  @Input() childBeauty: Beauty[];
  @Output() clickSender = new EventEmitter();


}
