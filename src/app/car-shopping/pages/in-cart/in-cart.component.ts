import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TitleComponent } from "../../../shared/components/Title/Title.component";
import { CartShoppingService, ElementInCar } from '../../services/cart-shopping.service';
import { Item } from '../../../products/interfaces/item.interface';
import { TruncateTextPipe } from '../../../products/pipes/truncateText.pipe';
import { CounterComponent } from '../../../shared/components/counter/counter.component';

@Component({
  selector: 'app-in-cart',
  imports: [TitleComponent, TruncateTextPipe, CounterComponent],
  templateUrl: './in-cart.component.html',
})
export class InCartComponent implements OnInit{
  constructor(private cartService: CartShoppingService){}
  items: ElementInCar[] = []
  ngOnInit(): void {
      this.cartService.$itemsInCar.subscribe(items => this.items = items ?? [])
  }

  handleNewCuantity(newCuantity: number, index: number){
    console.log(newCuantity);
    const element = this.items[index]
    element.elements = newCuantity;
    element.price = newCuantity * element.product.price;
  }
}
