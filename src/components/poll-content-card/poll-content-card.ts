import { Component, Input } from '@angular/core';


@Component({
  selector: 'poll-content-card',
  templateUrl: 'poll-content-card.html'
})
export class PollContentCardComponent {

  
@Input() obj;
  constructor() {}
}
