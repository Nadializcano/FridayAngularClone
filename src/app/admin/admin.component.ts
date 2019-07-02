import { Component, OnInit } from '@angular/core';
import { BeautyService } from '../beauty.service';
import { Beauty } from '../models/beauty.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BeautyService]
})
export class AdminComponent implements OnInit {

  constructor(private beautyService: BeautyService) { }

  ngOnInit() {
  }

  submitBeauty(title: string, category: string, description: string){
    var newBeauty: Beauty = new Beauty(title, category, description, this.imageSrc);
    this.beautyService.addBeauty(newBeauty);
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
