import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel } from 'src/app/_models/OrderModel';
import { UserAuthService } from '../user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  PATH_OF_API = 'http://localhost:2001';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  requestHeader1 = new HttpHeaders({ 
    //'No-Auth': 'True',
    'Content-Type': 'application/json',
     'Cache-Control': 'no-cache'
     //'Authorization':`Bearer ${this.userAuthService.getToken()}`
    });
  
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService 
  ) {}

   // update user

  
public updateUser(userForm: any) {
  return this.httpclient.put(this.PATH_OF_API + '/dealer/updateuser', userForm ,{

    headers: this.requestHeader1,
    
  });
}


// delete user
public deleteUser(id: any) {
  return this.httpclient.delete(this.PATH_OF_API + '/dealer/deleteuser/' + id ,{

  });
    
}

   // order
  public addOrder(order:any){
    return this.httpclient.post("http://localhost:2001/dealer/addOrder",order,{
      headers: this.requestHeader1,
    });
  }
// get all orders
  getDealerOrders(dealerId : string){
    return this.httpclient.get("http://localhost:2001/dealer/viewAllOrderByDealer/"+dealerId,{
      responseType:'json',
    });
  }



// delete oder
public deleteOrder(id: any) {
  return this.httpclient.delete(this.PATH_OF_API + '/dealer/deleteOrder/' + id ,{

    //headers:this.requestHeader,
    responseType:'text',
    
  });   
}

public getpayment(id:any){

  return this.httpclient.get("http://localhost:2001/dealer/viewOrderById/"+id,{
     // responseType:'json',
     headers: this.requestHeader1,
    });


}

}
