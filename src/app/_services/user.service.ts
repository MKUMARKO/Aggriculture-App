import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:2001';

   headers = new HttpHeaders({
    
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });


  requestHeader = new HttpHeaders({ 
                                     'No-Auth': 'True',
                                     //'Content-Type': 'application/json',
                                      //'Cache-Control': 'no-cache'
                                      //'Authorization':`Bearer ${this.userAuthService.getToken()}`
                                     });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}
   

// login
  public login(loginData) {
    return this.httpclient.post(this.PATH_OF_API + '/home/login', loginData, {
      headers: this.requestHeader,
    });
  }



  
  
// get all users


  public getAllUser(){

    return this.httpclient.get(this.PATH_OF_API + '/admin/finduser', { 
         responseType:'json'});
  }
  // delete user
  public deleteUser(id: any) {
    return this.httpclient.delete(this.PATH_OF_API + '/admin/deleteuser/' + id ,{

    });
      
  }
  
// get user by id
  public getUser(userId: any) {
    return this.httpclient.delete(this.PATH_OF_API + '/homee/finduser/' + userId ,{

      responseType:'json'
      
    });
      
  }

  // update user

  
public updateUser(userForm: any) {
  return this.httpclient.put(this.PATH_OF_API + '/admin/updateuser', userForm ,{

    headers: this.headers,
    
  });
}

  

// role match code
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
