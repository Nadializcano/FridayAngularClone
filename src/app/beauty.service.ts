import { Injectable } from '@angular/core';
import { Beauty } from './models/beauty.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BeautyService {
  beauties: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.beauties = database.list('beauties');
}

  getBeauties() {
    return this.beauties;
  }

  getBeautyById(beautyId: string){
    return this.database.object('beauties/' + beautyId);
  }

  addBeauty(newBeauty: Beauty){
    this.beauties.push(newBeauty);
  }

}
