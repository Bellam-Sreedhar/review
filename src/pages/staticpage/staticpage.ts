import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-staticpage',
  templateUrl: 'staticpage.html',
})
export class StaticpagePage {
title:String="static";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 menus=["Menu1","Menu2","Menu3","Menu4","Menu5","Menu6","Menu7","Menu8","Menu9"];
 links=["Link1","Link2","Link3","Link4","Link5","Link6","Link7","Link8","Link9"];
}
