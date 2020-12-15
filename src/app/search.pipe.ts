import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Product[], args: string): unknown {
    if (args){
      return value.filter((item) => item.name.toLowerCase().includes(args.toLowerCase()));
    }
    return value;
  }

}
