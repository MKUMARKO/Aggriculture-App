import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        //this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setRoles(response.userDetails.authorities);

        console.log(response.userDetails.contactNo);

        //this.userAuthService.setToken(response.jwtToken);
        this.userAuthService.setToken(response.jwt);

        this.userAuthService.setId(response.userDetails.id)

        this.userAuthService.setUserName(response.userDetails.username)

        this.userAuthService.setAccountNumber(response.userDetails.accountNumber)

        this.userAuthService.setAddress(response.userDetails.address)

        this.userAuthService.setContactNo(response.userDetails.contactNo)

        this.userAuthService.setName(response.userDetails.name)
    
        this.userAuthService.setRole(response.userDetails.role)


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
       // console.log(error);
        alert(error.message);
        console.log(error.getMessage);
      }
    );
  }
}
