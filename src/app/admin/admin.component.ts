import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CropService } from '../_services/crop.service';
import { OrderService } from '../_services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  
  
  constructor( private userService: UserService,
               private httpClient: HttpClient , 
               private cropService : CropService,
               private orderService : OrderService
               ) { 
                              this.getUserDetails();
                              this.getAllCrop();
                              this.getAllOrder();
  }

  ngOnInit(): void {

   // this.refresh();

    
  }
userList= null as any;
cropList= null as any;
orderList= null as any;
search ="";
id: any;
ordersearch="";


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

aa:boolean=false;

setIndex(ii){
  this.aa=ii;
  console.log
}

////////////////////////////////---------Order Management--------------//////////////////////////////////

// Get all the order
getAllOrder() {
  this.orderService.getAllOrder().subscribe(
    (resp) => {
      console.log(resp);
      this.orderList = resp;
      
    },
    (err) => {
      console.log(err);
    }
  );
}


//delete crop

deleteOrder(order:any) {
  this.orderService.deleteOrder(order.id).subscribe(
    (resp) => {
      console.log(resp);
    },
    (err) => {
      console.log(err);
    }
  );
  confirm('do you want to delete the order')
  this.ngOnInit();

 
}










refresh(){
window.location.reload();

}



}
