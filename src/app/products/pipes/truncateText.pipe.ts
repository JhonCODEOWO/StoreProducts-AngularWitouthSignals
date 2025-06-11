import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, maxLength: number): string {
    if(value.length < maxLength) return value;
    value = value.substring(0, maxLength);
    return value.trim() + '...';
  }

}
