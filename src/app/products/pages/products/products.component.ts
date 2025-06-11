import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/Products.service';
import { Item } from '../../interfaces/item.interface';
import { CurrencyPipe } from '@angular/common';
import { TruncateTextPipe } from '../../pipes/truncateText.pipe';
import { SearchInputComponent } from '../../../shared/components/search-input/search-input.component';
import { FilterProductsPipe } from '../../pipes/filterProducts.pipe';
import { CartShoppingService } from '../../../car-shopping/services/cart-shopping.service';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, TruncateTextPipe, SearchInputComponent, FilterProductsPipe],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: Item[] | null = null;
  querySearch: string = '';
  constructor(private productService: ProductsService, private cartService: CartShoppingService){}

  ngOnInit(): void {
      this.productService.searchProducts().subscribe( products => this.products = products);
  }

  search(query: string){
    this.querySearch = query;
  }

  addToCart(item: Item){
    this.cartService.addItem(item);
  }
}
