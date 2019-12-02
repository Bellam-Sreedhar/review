import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the QuestionAndAnsewersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question-and-ansewers-list',
  templateUrl: 'question-and-ansewers-list.html',
})
export class QuestionAndAnsewersListPage {
  obj=this.navParams.get("qa");
  title:string;
qaContent=[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: ServiceProvider,
    public constants: ConstantsProvider
    ) {
      if(this.obj.tagObj!=""){
        this.title=this.obj.tagObj;
        }else{
          this.title=this.obj.categoryObj.name;
        }
    this.getQuestionAndAnswers(this.obj);
  }
  getQuestionAndAnswers(obj){
    var URL=this.constants.URL+this.constants.GETQUESTIONANDANSWERS_URL
    var body={};
    body["categoryId"]=obj.categoryObj.id;
    body["pageNo"]=1;
    body["pageSize"]=10;
    this.service.postWithSessionId(URL,body).subscribe((data)=>{
this.qaContent=data.payload.articles;
console.log(this.qaContent);
    });
  }
}
