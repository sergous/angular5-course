import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'unique'})
export class UniquePipe implements PipeTransform {
  transform(array: any[]): any[] {
    return array.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
    });
  }
}