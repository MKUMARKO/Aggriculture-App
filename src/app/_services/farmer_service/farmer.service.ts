import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CropModel } from 'src/app/_models/CropModel';
import { UserAuthService } from '../user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  PATH_OF_API = 'http://localhost:2001';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService 
  ) {}
  // get all crops under farmer
 public getAllCrop(id:string){

  return this.httpclient.get(this.PATH_OF_API + '/farmer/viewAllOrderByFarmer/'+id, { 
    responseType:'json'
  });
}
// get all crops under farmer demo 2

getMyCrops(farmerId:String){



  return this.httpclient.get<CropModel[]>("http://localhost:2001/farmer/viewAllOrderByFarmer/"+farmerId,{
    //responseType:'json',
  });

}


// delete grop
public deleteCrop(id: any) {
  return this.httpclient.delete(this.PATH_OF_API + '/homee/deleteCrop/' + id ,{ 
  });
    
}
}