import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  PATH_OF_API = 'http://localhost:2001';

  requestHeader = new HttpHeaders({ 
                                     'No-Auth': 'True',
                                     'Content-Type': 'application/json',
                                      'Cache-Control': 'no-cache'
                                      
                                     });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}
   

/////////////////////////home start/////////////////////////////////////////////////////////////
// insert the candidate data
public addUser(formData){

  const headers = new HttpHeaders({
    
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });

  var body = JSON.stringify({

  "name": formData.get('name').value, 
  "contactNo": formData.get('contactNo').value,
  "address": formData.get('address').value,
  "userName": formData.get('userName').value,
  "password": formData.get('password').value,
  "accountNumber": formData.get('accountNumber').value,
  
  "role":formData.get('role').value,

  
   })
  
  this.httpclient.post('http://localhost:2001/home/adduser', body, { headers:this.requestHeader,}).subscribe(
    response => {
      console.log(response);
     
      confirm('do you want to submit the application')
      alert('recored inserted successfully')
    },
    error => {
      //console.log("haii")
      console.log(error)
      alert('userId already exist')
      console.log(error.getMessage);
    });
  
}
}
