import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CropService } from '../_services/crop.service';
import { FarmerService } from '../_services/farmer_service/farmer.service';
import { UserAuthService } from '../_services/user-auth.service';
import jsPDF from 'jspdf';
import { CropModel } from '../_models/CropModel';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  name=this.userAuthService.getName();
  userId=this.userAuthService.getId();
  cropList= null as any;
  cropsearch ="";
  
  myOrders=null as any;

//variables
cropToUpdate = {  
             id:"",
             cropName:""  ,
             address:"",


             }

 // order details
 myOrder:any={
    
  "orderId":"",
  "dealerId":"",
  "farmerId":"",
  "cropId":"",
  "dealerName":"",
  "farmerName":"",
  "cropName":"",
  "dealerMobile":"",
  "farmerMobile":"",
  "cost":""

}  
  
// serial number generator
aa:boolean=false;

setIndex(ii){
  this.aa=ii;
  console.log
}


 ////refresh page
 refresh(){
  window.location.reload();
  
  }

  constructor( private cropService:CropService ,
                private userAuthService : UserAuthService ,
                private farmerService:FarmerService,
                private fb:FormBuilder ) {

    
                                   this.getAllCrop();
                                    this.getMyOrders();
                 }

  ngOnInit(): void {
   
    
    
  }
  //----crops validations----

  cropForm = new FormGroup({
  
   farmerId: new FormControl('', [Validators.required, Validators.minLength(4)]),
   uploadedBy: new FormControl('',Validators.required),
   cropName: new FormControl('', Validators.required),

   address: new FormControl('', Validators.required),
   cropQty: new FormControl('', Validators.required),
   cropType: new FormControl('', Validators.required),
   cropImgUrl: new FormControl('', Validators.required),
   cropDesc: new FormControl('', Validators.required),
   cropPrice: new FormControl('', Validators.required), 
  });
  
  get f() {
    return this.cropForm.controls;
  }

  get f1() {
    return this.cropForm1.controls;
  }

  cropForm1 = new FormGroup({
  
    id: new FormControl('', Validators.required),
   farmerId: new FormControl('', [Validators.required, Validators.minLength(4)]),
   uploadedBy: new FormControl('',Validators.required),
   cropName: new FormControl('', Validators.required),

   address: new FormControl('', Validators.required),
   cropQty: new FormControl('', Validators.required),
   cropType: new FormControl('', Validators.required),
   cropImgUrl: new FormControl('', Validators.required),
   cropDesc: new FormControl('', Validators.required),
   cropPrice: new FormControl('', Validators.required), 
  });
  

  
  //-----add  crop method

  submitCrop() {

    if(confirm("Do you want to submit the crop")) {
    this.farmerService.addCrop(this.cropForm.value).subscribe(
      (response: any) => {
      
  console.log(response);
 
      },
      (error) => {
        console.log(error);
        alert("Something went wrong")
      }
    );
   alert('crop added')
  }
}

//  update crop

cropToEdit = {
  id:"",  
  farmerId:"",
  uploadedBy:"",
  cropName:"",
  address:"",
  cropQty:"",
  cropType:"",
  cropImgUrl:"",
  cropDesc:"",
  cropPrice:"",

}
buy1(crop: any){
  this.cropToEdit = crop;
}

edit(crop:any){
  this.cropToEdit=crop;

}

updateCrop(){
  if(confirm("Are you sure to update the crop")) {
  this.farmerService.updateCrop(this.cropForm1.value).subscribe(
    (resp) => {
      console.log(resp);
    
    },
    (err) => {
      console.log(err);
    }
  );
  alert('crop updated ')
  }
}



// get all crops under farmer

getAllCrop() {
  this.farmerService.getAllCrop(this.userAuthService.getId()).subscribe(
    (resp) => {
      console.log(resp);

      console.log(this.userAuthService.getId())
      this.cropList = resp;
      
    },
    (err) => {
      console.log(err);
    }
  );
}

//delete crop

deleteCrop(crop:any) {

  if(confirm("Are you sure to delete ")){ 
  this.farmerService.deleteCrop(crop.id).subscribe(
    (resp) => {
      console.log(resp);
    },
    (err) => {
      console.log(err);
    }
  );
 alert("successfully deleted")
  this.ngOnInit();
  }
 
}


// get orders under farmer

getMyOrders() {
  this.farmerService.getFarmerOrders(this.userAuthService.getId()).subscribe(res=>{
    this.myOrders=res;
    console.log(this.myOrders);
  })
}


//delete order

deleteOrder(order:any) {

  if(confirm("Are you sure to delete")) {
  this.farmerService.deleteOrder(order.orderId).subscribe(
    (resp) => {
      console.log(resp);
    },
    (err) => {
      console.log(err);
    }
  );
  alert("successfully deleted")
  
  }
}


// get order by id


getPrice(order : any){
 
  this.farmerService.getpayment(order.orderId).subscribe(res=>{
    this.myOrder=res;
    console.log(res+"received payment obj");
    console.log(this.myOrder.orderId);
    },
    (err) => {
      console.log(err);
    }
  );
}

// pdf view order details
@ViewChild('receipt') el!:ElementRef;
scroll(el: HTMLElement) {
  el.scrollIntoView();
}

getPDF(){

  let pdf = new jsPDF('p','pt','a4');

  pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
      pdf.save(this.cropToUpdate.cropName+ " reciept.pdf");
    }

  })
  alert("successfully downloaded")
}

}
