import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: string[], order: 'asc' | 'desc' = 'asc'): string[] {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
  }
}