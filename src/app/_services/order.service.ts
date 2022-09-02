import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  PATH_OF_API = 'http://localhost:2001';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService 
  ) {}


///////////////////////////////////////////////////////////
/////////////////////ADMIN/////////////////////////////////
////////////////////////////////////////////////////////////

// get all order
 public getAllOrder(){

  return this.httpclient.get(this.PATH_OF_API + '/homee/viewAllOrder', { 
    headers:this.requestHeader,});

  }
 // delete oder
  public deleteOrder(id: any) {
    return this.httpclient.delete(this.PATH_OF_API + '/admin/deleteOrder/' + id ,{ 
    });
      
  }


////////////////////////////////////////////////////////
/////////////////////ADMIN ENDS/////////////////////////
////////////////////////////////////////////////////////



}
