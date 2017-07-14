import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../item';

@Pipe({
    name: 'instockPipe',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform (value: Array<any>, args?: any) {
        let filterArray:any = [];
        let filterArray1:any = [];
        if (args) {
            filterArray1 = value.filter(function(val, key) {
              if (val[args[0]] === args[1] && filterArray.indexOf(val[args[2]]) < 0) {
                filterArray.push(val[args[2]]);
                return true;
              } else {
                return false;
              }
            });
        } else {
            filterArray1 = value.filter(function(val, key) {
            if (filterArray.indexOf(val.instock) < 0) {
                filterArray.push(val.instock);
                return true;
            } else {
                return false;
            }
            });
        } 
        return filterArray1;
    }
}