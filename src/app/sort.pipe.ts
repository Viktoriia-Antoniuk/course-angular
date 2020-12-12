import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Product[], args: string): any [] {
    console.log(value, args);
    function sortArray(a: Product, b: Product): number {
      if (args === 'desc') {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    }
    return value.sort(sortArray);
  }

}
