import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../_services/home_service/home.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName: string = "";
  password: string  = "";
  invalidLogin = false
 message!: string;
  
   
  
  
  constructor(private homeService: HomeService, private router: Router ) { }

  ngOnInit(): void {
  }
  //message : string=""
  email = ''
  

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
 

}


function checkLogin() {
  throw new Error('Function not implemented.');
}

