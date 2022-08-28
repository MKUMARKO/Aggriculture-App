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

  ///////

  public setName(name:string){
    localStorage.setItem('name',name)
  }

  public getName(): string {
    return localStorage.getItem('name');
  }



  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
