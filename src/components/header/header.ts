import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchResultPage } from '../../pages/search-result/search-result';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ServiceProvider } from '../../providers/service/service';
//import {faCaretDown} from '@fortawesome/';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input() title;
  activitiesContent = [];
  searchKey: any;
  searchBarShow = false;
  ativityShow = false;
  //faCaretDown:faCaret
  constructor(
    public navCtrl: NavController,
    public service: ServiceProvider,
    public constants: ConstantsProvider
    ) {
    this.getActivities();
  }
  getActivities() {
    var URL = this.constants.URL + this.constants.GETACTIVITIES_URL;
    var body = {};
    this.service.postWithSessionId(URL, body).subscribe((data) => {
      this.activitiesContent = data.payload;
      console.log("activity content");
      console.log(this.activitiesContent);
    })
  }
  searchIconClick() {
    this.searchBarShow = true;
  }
  onCancel(event) {
    this.searchBarShow = false;
    this.searchKey="";
  }
  doSearch() {
    this.navCtrl.push(SearchResultPage, { 'searchKey': this.searchKey })
  }
  activitiesMenuClick(){
this.ativityShow=!this.ativityShow;
  }
}
