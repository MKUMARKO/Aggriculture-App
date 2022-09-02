import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CropModel } from 'src/app/_models/CropModel';
import { OrderModel } from 'src/app/_models/OrderModel';
import { UserAuthService } from '../user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  PATH_OF_API = 'http://localhost:2001';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  requestHeader1 = new HttpHeaders({ 
    'Content-Type': 'application/json',
     'Cache-Control': 'no-cache'
    });
  
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService 
  ) {}

  // update user

  
public updateUser(userForm: any) {
  return this.httpclient.put(this.PATH_OF_API + '/farmer/updateuser', userForm ,{

    headers: this.requestHeader1,
    
  });
}

// delete user
public deleteUser(id: any) {
  return this.httpclient.delete(this.PATH_OF_API + '/farmer/deleteuser/' + id ,{

  });
    
}

// add crop
public addCrop(cropData) {
  return this.httpclient.post(this.PATH_OF_API + '/farmer/addCrop', cropData, {
    headers: this.requestHeader1,
  });
}
// update croop

public updateCrop(crop: any) {
  return this.httpclient.put<CropModel[]>(this.PATH_OF_API + '/farmer/updateCrop', crop ,{
    
  });
}
  // get all crops under farmer
 public getAllCrop(id:string){

  return this.httpclient.get(this.PATH_OF_API + '/farmer/viewAllCropByFarmer/'+id, { 
    responseType:'json'
  });
}

// delete crop
public deleteCrop(id: any) {
  return this.httpclient.delete(this.PATH_OF_API + '/farmer/deleteCrop/' + id ,{ 
  });   
}
// get all order under the farmer 
getFarmerOrders(farmerId : string){
  return this.httpclient.get("http://localhost:2001/farmer/viewAllOrderByFarmer/"+farmerId,{
    responseType:'json',
  });
}


// delete oder
public deleteOrder(id: any) {
  return this.httpclient.delete(this.PATH_OF_API + '/farmer/deleteOrder/' + id ,{

    
    responseType:'text',
    
  });   
}

// view order by id
public getpayment(id:any){

  return this.httpclient.get("http://localhost:2001/farmer/viewOrderById/"+id,{
     headers: this.requestHeader1,
    });

   
}




}