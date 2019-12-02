import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Home";
  featuredContent = [];
  promotedContent = []; 
  constructor(
    public navCtrl: NavController,
    public service: ServiceProvider,
    public constants: ConstantsProvider
  ) {
    this.getFeaturedContent();
    this.getPromotedContent();
  }
  getFeaturedContent() {
    var URL = this.constants.URL + this.constants.FEATURED_CONTENT;
    var body = {};
    this.service.postWithSessionId(URL, body).subscribe((data) => {
      this.featuredContent = data.payload;
      console.log("Featured Content");
      console.log(data.payload);
    })
  }
  getPromotedContent() {
    var URL = this.constants.URL + this.constants.PROMOTED_CONTENT;
    var body = {};
    this.service.postWithSessionId(URL, body).subscribe((data) => {
      this.promotedContent = data.payload;
      console.log("Promoted Content")
      console.log(data.payload);
    })
  }
}
