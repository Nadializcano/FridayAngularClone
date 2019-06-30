import { Injectable } from '@angular/core';
import { Beauty } from './models/beauty.model';

@Injectable()
export class BeautyService {

  constructor() { }

  getCurrentBeauty() {
    return CURRENTBEAUTY;
  }

}
