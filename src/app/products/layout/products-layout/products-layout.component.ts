import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ItemComponent } from "../../../car-shopping/components/item/item.component";

@Component({
  selector: 'app-products-layout',
  imports: [RouterOutlet, ItemComponent],
  templateUrl: './products-layout.component.html',
})
export class ProductsLayoutComponent { }
