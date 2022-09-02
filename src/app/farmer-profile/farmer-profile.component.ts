import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { FarmerService } from '../_services/farmer_service/farmer.service';
import { UserAuthService } from '../_services/user-auth.service';


@Component({
  selector: 'app-farmer-profile',
  templateUrl: './farmer-profile.component.html',
  styleUrls: ['./farmer-profile.component.css']
})
export class FarmerProfileComponent implements OnInit {

  // user details
  contactNo=this.userAuthService.getContactNo();
  id=this.userAuthService.getId();
  address=this.userAuthService.getAddress();
  name=this.userAuthService.getName();
  accountNumber=this.userAuthService.getAccountNumber();
  
  role=this.userAuthService.getRole();

  userName=this.userAuthService.getUserName();
  
  constructor( 
              private userAuthService:UserAuthService,
              private router : Router,
              
             private farmerService: FarmerService) { 
       
      
   }

  ngOnInit(): void {
  }

  //refresh

 refresh(){
  window.location.reload();
  
  }



  
userForm = new FormGroup({

  id:new FormControl('', Validators.required),
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
 // this.homeService.addUser( this.userForm);
}

updateUser(){
  if(confirm("Do you want to updatte the profile")) {
  this.farmerService.updateUser(this.userForm.value).subscribe(
    (resp) => {
      console.log(resp);
    
    },
    (err) => {
      console.log(err);
    }
  );
  alert('user updated ')
  }
}




// clear
public logout() {
    
  this.userAuthService.clear();
  this.router.navigate(['/home']);
}

//  Delete the user by id
deleteUser() {
  if(confirm('do you want to delete your account')){
  this.farmerService.deleteUser(this.id).subscribe(
    (resp) => {
      console.log(resp);
    },
    (err) => {
      console.log(err);
      alert("something went wrong")
    }
  );
  
  this.ngOnInit();

  }
}



}
