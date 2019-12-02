import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ArticleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-article-list',
  templateUrl: 'article-list.html',
})
export class ArticleListPage {
  obj=this.navParams.get("articles");
  title:string;
articleContent=[];
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
    this.getArticles(this.obj);
  }
  getArticles(obj){
var URL=this.constants.URL+this.constants.GETARTICLES_URL;
var body={};
body["categoryId"]=obj.categoryObj.id;
body["pageNo"]=1;
body["pageSize"]=10;
body["engagementModel"]=obj.categoryObj.engagementModel;
body["tag"]=obj.tagObj;
this.service.postWithSessionId(URL,body).subscribe((data)=>{
  this.articleContent=data.payload.articles;
  console.log(this.articleContent);
})
  }
}
