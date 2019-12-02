import { Component, Input } from '@angular/core';

@Component({
  selector: 'promoted-content-card',
  templateUrl: 'promoted-content-card.html'
})
export class PromotedContentCardComponent {
@Input() obj
  constructor() {
  
   }

}
