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
  ionViewDidLoad() {
    console.log('ionViewDidLoad StaticpagePage');
  }

}
