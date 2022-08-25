import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:2001';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData) {
    return this.httpclient.post(this.PATH_OF_API + '/home/login', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  
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
    
    this.httpclient.post('http://localhost:2001/home/adduser', body, { headers: headers }).subscribe(
      response => {
        console.log(response);
       
        confirm('do you want to submit the application')
        alert('recored inserted successfully')
      },
      error => {
        //console.log("haii")
        alert('userId already exist')
        console.log(error.getMessage);
      });
    
  }
// get all users

anny:any
  public getAllUser(){

    return this.httpclient.get(this.PATH_OF_API + '/home/finduser', { 
         headers:this.requestHeader,});
  }
  // delete user
  public deleteUser(id: any) {
    return this.httpclient.delete(this.PATH_OF_API + '/admin/deleteuser/' + id ,{

      //headers:this.requestHeader,
      responseType: this.anny
     
      

    });
      
  }
  
// get user by id
  public getUser(userId: any) {
    return this.httpclient.delete(this.PATH_OF_API + '/home/finduser/' + userId ,{

      headers:this.requestHeader,
      
    });
      
  }

  



































  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].authority === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}
