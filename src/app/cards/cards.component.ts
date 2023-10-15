import { Component, Input } from '@angular/core';

/**
 * @title Card with sub-title
 */


@Component({
  selector: 'cards-component',
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.css'],
})
export class CardsComponent {
  @Input() plan : string;
  @Input() price : string;
  @Input() mutedItems : string[];
  @Input() unMutedItems : string[];

  constructor() {
    this.plan = "";
    this.price = "";
    this.mutedItems = [];
    this.unMutedItems = [];
  }
}
