import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ConstantsProvider } from '../../providers/constants/constants';
import { AlbumListPage } from '../../pages/album-list/album-list';
import { ArticleListPage } from '../../pages/article-list/article-list';
import { PollListPage } from '../../pages/poll-list/poll-list';
import { StaticpagePage } from '../staticpage/staticpage';
import { QuestionAndAnsewersListPage } from '../../pages/question-and-ansewers-list/question-and-ansewers-list';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  title:string="List";
  objArray=this.navParams.get("category");
   constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: ServiceProvider,
    public constants: ConstantsProvider
    ) {
if(this.objArray.categoryObj.engagementModel==100){ 
  this.navCtrl.setRoot(ArticleListPage, {"articles": this.objArray});
}else if(this.objArray.categoryObj.engagementModel==400){
  this.navCtrl.setRoot(AlbumListPage, {"albums": this.objArray});
}else if(this.objArray.categoryObj.engagementModel==200){
  this.navCtrl.setRoot(PollListPage, {"polls": this.objArray});
}else if(this.objArray.categoryObj.engagementModel==600){
  this.navCtrl.setRoot(QuestionAndAnsewersListPage, {"qa": this.objArray});
}else if(this.objArray.categoryObj.engagementModel==500){
  this.navCtrl.setRoot(StaticpagePage);
}else{
   console.log("No EngagementModel Found");
}
  }
}
