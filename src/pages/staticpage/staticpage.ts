import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-staticpage',
  templateUrl: 'staticpage.html',
})
export class StaticpagePage {
title:String="static";
menuLinks: Array<object>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menuLinks=[
      {menu:'menu1', link:'link1'},
      {menu:'menu2', link:'link2'},
      {menu:'menu3', link:'link3'},
      {menu:'menu4', link:'link4'},
      {menu:'menu5', link:'link5'},
      {menu:'menu6', link:'link6'},
      {menu:'menu7', link:'link7'},
      {menu:'menu8', link:'link8'},
      {menu:'menu9', link:'link9'}
    ]
  }
 

}
