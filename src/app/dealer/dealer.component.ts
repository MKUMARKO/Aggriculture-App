import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CropService } from '../_services/crop.service';
import { DealerService } from '../_services/dealer_service/dealer.service';
import { UserAuthService } from '../_services/user-auth.service';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {

  searchedKeyword="";
  cropList=null as any;
  myOrders=null as any;
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
 ////refresh page
 refresh(){
  window.location.reload();
  
  }

  // user details
  contactNo=this.userAuthService.getContactNo();
  id=this.userAuthService.getId();
  address=this.userAuthService.getAddress();
  name=this.userAuthService.getName();
  accountNumber=this.userAuthService.getAccountNumber();

 

  constructor( private cropService: CropService,
              private dealerService: DealerService,
              private userAuthService:UserAuthService) { 
        this.getAllCrop();
        this.getMyOrders();
      
   }

  ngOnInit(): void {
  }

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

    cropToBuy = {
    cropName:"",  
    farmerId:"",
    id:"",
    uploadedBy:"",
    cropDesc:"",
   
  }

  // add crop

  buy1(crop: any){
    this.cropToBuy = crop;
  }
  
  orderForm = new FormGroup({
    dealerId: new FormControl('', Validators.required),
    farmerId: new FormControl('', Validators.required),
    cropId: new FormControl('', Validators.required),

    dealerName: new FormControl('',Validators.required),
    farmerName: new FormControl('', Validators.required),
    cropName: new FormControl('', Validators.required),
 
    dealerMobile: new FormControl('', Validators.required),
    farmerMobile: new FormControl('', Validators.required),
    
   
    cost: new FormControl('', Validators.required), 
   });


  buyCrop(){
    if(confirm("Do you want to buy the crop ")){ 
    this.dealerService.addOrder(this.orderForm.value).subscribe(
      (resp) => {
        console.log(resp);
        
      },
      (err) => {
        console.log(err);
        alert("crop already booked")
      }
    );
    alert("crop booked")

    }
  }
  
// get orders under dealer


getMyOrders() {
  this.dealerService.getDealerOrders(this.userAuthService.getId()).subscribe(res=>{
    this.myOrders=res;
    console.log(this.myOrders);
  })
}  



//delete order

deleteOrder(order:any) {
  if(confirm("Are you sure to delete ")){ 
  this.dealerService.deleteOrder(order.orderId).subscribe(
    (resp) => {
      console.log(resp);
    },
    (err) => {
      console.log(err);
    }
  );
  }

}


// get order by id


getPrice(order : any){
 
  this.dealerService.getpayment(order.orderId).subscribe(res=>{
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
      pdf.save("reciept.pdf");
    }

  })
}



}
