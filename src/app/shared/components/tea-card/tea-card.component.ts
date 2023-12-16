import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'tea-card',
  templateUrl: './tea-card.component.html',
  styleUrls: ['./tea-card.component.css']
})
export class TeaCardComponent{

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

}
