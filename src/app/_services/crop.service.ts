import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CropService {


  PATH_OF_API = 'http://localhost:2001';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService 
  ) {}


// get all crops
 public getAllCrop(){

  return this.httpclient.get(this.PATH_OF_API + '/home/viewAllCrop', { 
    headers:this.requestHeader,});

  }
 // delete grop
  public deleteCrop(id: any) {
    return this.httpclient.delete(this.PATH_OF_API + '/home/deleteCrop/' + id ,{

      headers:this.requestHeader,
      
    });
      
  }

}
