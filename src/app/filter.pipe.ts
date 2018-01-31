import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], season: number): any[] {
    if (!items) { return []; }
    if (!season) { return items; }
    return items.filter(item => item.seasonNumber === season);
  }
}