import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CropService } from '../_services/crop.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  
  
  constructor( private userService: UserService, private httpClient: HttpClient , private cropService : CropService) { 
    this.getUserDetails();
    this.getAllCrop();
  }

  ngOnInit(): void {

   // this.refresh();

    
  }
userList= null as any;
cropList= null as any;
orderList= null as any;


// Get all the users 
getUserDetails() {
  this.userService.getAllUser().subscribe(
    (resp) => {
      console.log(resp);
      this.userList = resp;
      
    },
    (err) => {
      console.log(err);
    }
  );
}

//  Delete the user by id
deleteUser(user:any) {
  this.userService.deleteUser(user.id).subscribe(
    (resp) => {
      console.log(resp);
    },
    (err) => {
      console.log(err);
    }
  );
  confirm('do you want to delete the user data')
  this.ngOnInit();

 
}

// get user by id
id: any;
getUserById(){

  if(this.id==""){
    this.getUserDetails();
  }
  else{
    this.userList=this.userList.filter(res =>{
      return res.id.match(this.id);
    })
  }
}

///////////////////////////------CROP--------/////////////////////////////////////////


// Get all the crop
getAllCrop() {
  this.cropService.getAllCrop().subscribe(
    (resp) => {
      console.log(resp);
      this.cropList = resp;
      
    },
    (err) => {
      console.log(err);
    }
  );
}


//delete crop

deleteCrop(crop:any) {
  this.cropService.deleteCrop(crop.id).subscribe(
    (resp) => {
      console.log(resp);
    },
    (err) => {
      console.log(err);
    }
  );
  confirm('do you want to delete the crop')
  this.ngOnInit();

 
}

//get crop by id
getCropById(){
  if(this.id==""){
    this.getAllCrop();
  }
  else{
    this.cropList=this.cropList.filter(res =>{
      return res.id.match(this.id | this.id);
    })
  }

}

searchText:any;












refresh(){
window.location.reload();

}



}
