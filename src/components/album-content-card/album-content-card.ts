import { Component, Input } from '@angular/core';

/**
 * Generated class for the AlbumContentCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'album-content-card',
  templateUrl: 'album-content-card.html'
})
export class AlbumContentCardComponent {

  @Input() obj

  constructor() {

  }

}
