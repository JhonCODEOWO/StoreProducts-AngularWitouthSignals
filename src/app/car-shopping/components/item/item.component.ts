import { Component, OnInit } from '@angular/core';
import { CartShoppingService } from '../../services/cart-shopping.service';
import { Item } from '../../../products/interfaces/item.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cart-shopping-item',
  imports: [RouterLink],
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit{
  constructor(private cartService: CartShoppingService){}
  actualItems: number = 0;

  ngOnInit(): void {
      this.cartService.$itemsInCar.subscribe(items => this.actualItems = items.length)
  }
}
