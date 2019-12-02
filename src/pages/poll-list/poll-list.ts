import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the PollListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-poll-list',
  templateUrl: 'poll-list.html',
})
export class PollListPage {
  obj=this.navParams.get("polls");
  title:string;
pollContent=[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public constants: ConstantsProvider,
    public service: ServiceProvider
    ) {
      if(this.obj.tagObj!=""){
        this.title=this.obj.tagObj;
        }else{
          this.title=this.obj.categoryObj.name;
        }
    this.getPolls(this.obj);
  }
getPolls(obj){
  var URL=this.constants.URL+this.constants.GETPOLLS_URL;
  var body={};
  body["categoryId"]=obj.categoryObj.id;
  body["pageNo"]=1;
  body["pageSize"]=10;
  this.service.postWithSessionId(URL,body).subscribe((data)=>{
this.pollContent=data.payload.polls;
console.log(this.pollContent);
  });
}
}
