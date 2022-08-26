import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderSearch'
})
export class OrderSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.orderId.toLocaleLowerCase().includes(args)) || 
                 (val.farmerId.toLocaleLowerCase().includes(args))||
                 (val.cropId.toLocaleLowerCase().includes(args))||
                 (val.dealerId.toLocaleLowerCase().includes(args)) ;
                 /*
                
                (val.cropName.toLocaleLowerCase().includes(args)) ||
                (val.farmerName.toLocaleLowerCase().includes(args))||
                (val.farmerDealer.toLocaleLowerCase().includes(args))||
                (val.orderStatus.toLocaleLowerCase().includes(args))||
                 
                 (val.uploadedBy.toLocaleLowerCase().includes(args))||
                 (val.cropType.toLocaleLowerCase().includes(args))
                 */
      return rVal;
    })

  }

}
