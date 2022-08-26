import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterSearch'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.cropName.toLocaleLowerCase().includes(args)) ||
       (val.cropType.toLocaleLowerCase().includes(args)) ||
        (val.farmerId.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}

