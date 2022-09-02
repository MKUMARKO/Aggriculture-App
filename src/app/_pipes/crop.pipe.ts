import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropsearch'
})
export class CropPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = 
                // (val.farmerId.toLocaleLowerCase().includes(args))||
                 (val.id.toLocaleLowerCase().includes(args))||
              
                 
                
                (val.cropName.toLocaleLowerCase().includes(args)) ||
                (val.cropType.toLocaleLowerCase().includes(args));
               
                 
      return rVal;
    })

  }


}
