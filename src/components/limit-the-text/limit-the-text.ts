import { Component, Input } from '@angular/core';
@Component({
  selector: 'limit-the-text',
  templateUrl: 'limit-the-text.html'
})
export class LimitTheTextComponent {
@Input() obj;
@Input() num;
str:String;
  constructor() {
  }
  ngOnChanges(){
   this.str=this.obj.length>this.num ? this.obj.substr(0,this.num)+'...' : this.obj;
  }
}