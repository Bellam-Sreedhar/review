import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html'
})
export class SearchResultPage {
  title:string="Search Results"
  pageNo=1;
  isInfiniteScrollEnable=true;
  searchKey=this.navParams.get("searchKey");
  searchContent=[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: ServiceProvider,
    public constants: ConstantsProvider
    ) {
    this.getSearchResults(this.searchKey);
  }
  getSearchResults(searchKey){
    var URL=this.constants.URL+this.constants.GETSEARCH_URL;
    var body={};
    body["pageNo"]=this.pageNo;
    body["pageSize"]=5;
    body["searchTerm"]=searchKey;
      this.service.postWithSessionId(URL,body).subscribe((data:any)=>{
      console.log("search Result")
      this.searchContent=data.payload.searchResults;
      console.log(data.payload.searchResults);
    })
  }
  getSearchResultByPagination(ev){
    var URL=this.constants.URL+this.constants.GETSEARCH_URL;
    var body={};
    this.pageNo=this.pageNo+1
    body["pageNo"]=this.pageNo;
    body["pageSize"]=5;
    body["searchTerm"]=this.searchKey;
     this.service.postWithSessionId(URL,body).subscribe((data:any)=>{
      this.searchContent=this.searchContent.concat(data.payload.searchResults);
      if(data.payload.end==0){
        var msg="No More Data";
       this.isInfiniteScrollEnable=false;
        console.log("There is no data")
        this.service.presentToast(msg,2000);
      }else{
       this.isInfiniteScrollEnable=true;
        console.log(data.payload.searchResults)
      }
      ev.complete();
    });
  }
}
