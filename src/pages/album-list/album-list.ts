import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConstantsProvider } from '../../providers/constants/constants';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the AlbumListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-album-list',
  templateUrl: 'album-list.html',
})
export class AlbumListPage {
  obj=this.navParams.get("albums");
  title:string;
albumContent=[];

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
    this.getAlbums(this.obj);
  }
getAlbums(obj){
var URL=this.constants.URL+this.constants.GETALBUMS_URL;
var body={};
body["categoryIds"]=[obj.categoryObj.id];
body["pageNo"]=1;
body["pageSize"]=10;
body["tags"]=[obj.tagObj];
this.service.postWithSessionId(URL,body).subscribe((data)=>{
  this.albumContent=data.payload.albums;
  console.log(this.albumContent);
})
}
}
