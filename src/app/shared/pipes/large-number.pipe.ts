import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largeNumber'
})
export class LargeNumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value >= 1e9) {
      return (value / 1e9).toFixed(2) + 'B'; // For billions
    } else if (value >= 1e6) {
      return (value / 1e6).toFixed(2) + 'M'; // For millions
    } else if (value >= 1e3) {
      return (value / 1e3).toFixed(2) + 'K'; // For thousands
    } else {
      return value.toFixed(2); // For anything less than a thousand
    }
  }
}
