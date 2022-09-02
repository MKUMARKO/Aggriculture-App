import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles'));
  }

  public setToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  public getToken(): string {
    return localStorage.getItem('jwt');
  }


  public setId(id:string){
    localStorage.setItem('id',id)
  }

  public getId(): string {
    return localStorage.getItem('id');
  }

  public setName(name:string){
    localStorage.setItem('name',name)
  }

  public getName(): string {
    return localStorage.getItem('name');
  }
//user name

public setUserName(username:string){
  localStorage.setItem('username',username)
}

public getUserName(): string {
  return localStorage.getItem('username');
}
// contact number

public setContactNo(contactNo: string){
  localStorage.setItem('contactNo',contactNo)

}

public getContactNo(): string {
  return localStorage.getItem('contactNo');
}
//address

public setAddress(address: string){
  localStorage.setItem('address',address)

}
public getAddress(): string {
  return localStorage.getItem('address');
}

//account number

public setAccountNumber(accountNumber: string){
  localStorage.setItem('accountNumber',accountNumber)

}
public getAccountNumber(): string {
  return localStorage.getItem('accountNumber');
}
// role



public setRole(role: string){
  localStorage.setItem('role',role)

}
public getRole(): string {
  return localStorage.getItem('role');
}










  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
