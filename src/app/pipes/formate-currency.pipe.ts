import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateCurrency'
})
export class FormateCurrencyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return args+value.toFixed(2);
  }

}
