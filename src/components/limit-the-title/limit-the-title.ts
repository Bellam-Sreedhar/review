import { Component, Input } from '@angular/core';

@Component({
  selector: 'limit-the-title',
  templateUrl: 'limit-the-title.html'
})
export class LimitTheTitleComponent {
  @Input() obj;
  @Input() num;
  str:String;
    constructor() {
    }
    ngOnChanges(){
     this.str=this.obj.length>this.num ? this.obj.substr(0,this.num)+'...' : this.obj;
    }
}
