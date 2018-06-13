import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gstCalculator'
})
export class GstCalculatorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let gstPerc = 18;
    if (args) {
      gstPerc = args;
    }
    return (gstPerc / 100) * value;
  }

}
