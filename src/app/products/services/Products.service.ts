import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Item } from '../interfaces/item.interface';
import { ProductAPIResponse } from '../interfaces/api-response.interface';
import { ItemMapper } from '../mappers/item.mapper';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  route = environment.API_URL;
  http = inject(HttpClient);

  searchProducts(query: string = '', page: number = 1): Observable<Item[]>{
    return this.http.get<ProductAPIResponse>(`${this.route}`).pipe(map(response => ItemMapper.responseToItemArray(response)));
  }
}
