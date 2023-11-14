import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConversion'
})
export class TemperatureConversionPipe implements PipeTransform {
  transform(value: number, unit: 'F' | 'C'): number {
    if (unit === 'F') {
      return (value - 32) * 5 / 9;
    } else {
      return (value * 9 / 5) + 32;
    }
  }
}