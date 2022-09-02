import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../_services/home_service/home.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  // logged in user details
  name=this.userAuthService.getName();
  userName=this.userAuthService.getUserName();
  contactNo=this.userAuthService.getContactNo();
  id=this.userAuthService.getId();
  address=this.userAuthService.getAddress();
  accountNumber=this.userAuthService.getAccountNumber();
  role=this.userAuthService.getRoles();
  

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,
    private homeService: HomeService, 
  ) {}

  ngOnInit(): void {}

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

//////////////////////
formGroup:any;

onSubmit(form){

}

//------------------  login ----------------------

login(loginForm: NgForm) {
  this.userService.login(loginForm.value).subscribe(
    (response: any) => {
      
      this.userAuthService.setRoles(response.userDetails.authorities);

      console.log(response.userDetails.id)

     
      this.userAuthService.setToken(response.jwt);

      this.userAuthService.setId(response.userDetails.id)

      this.userAuthService.setName(response.userDetails.name)
      const authorities = response.userDetails.authorities[0].authority;
      if (authorities === 'ROLE_ADMIN') {
        this.router.navigate(['/admin']);
      } 
      else if(authorities === 'ROLE_FARMER'){
        this.router.navigate(['/farmer']);
      }
      else {
        this.router.navigate(['/dealer']);
        
      }
    },
    (error) => {
      console.log(error);
    }
  );

  
}


//------------------add user-----------------------------------

userForm = new FormGroup({
  
  name: new FormControl('', [Validators.required, Validators.minLength(4)]),  
  contactNo: new FormControl('', Validators.required),
  address: new FormControl('', Validators.required),
  userName: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  accountNumber: new FormControl('', Validators.required),
  
  role: new FormControl('', Validators.required),
  
  
});

get f() {
  return this.userForm.controls;
}

submit() {
  this.homeService.addUser( this.userForm);
}

//-------------------------refresh--------------------------------------------

refresh(){
  window.location.reload();
  }
}











