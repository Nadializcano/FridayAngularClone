import { Component } from '@angular/core';
import { Beauty } from './models/beauty.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Home";

  selectedBeauty = null;

    masterBeauty: [Beauty] = [
      new Beauty('Food'),
      new Beauty ('Beauty')
    ]

    editBeauty(clickedBeauty){
      this.selectedBeauty = clickedBeauty;
    }

    finishedEditing(){
      this.selectedBeauty = null;
    }

    addBeauty(newBeauty: Beauty) {
      this.masterBeauty.push(newBeauty);
    }
}
