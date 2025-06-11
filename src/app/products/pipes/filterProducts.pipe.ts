import { Pipe, type PipeTransform } from '@angular/core';
import { Product } from '../interfaces/api-response.interface';
import { Item } from '../interfaces/item.interface';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {

  transform(value: Item[], query: string): Item[] {
    const search = value;
    return search.filter((item)=> item.name.includes(query));
  }

}
