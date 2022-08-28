import { Component, OnInit } from '@angular/core';
import { CropService } from '../_services/crop.service';
import { FarmerService } from '../_services/farmer_service/farmer.service';
import { UserAuthService } from '../_services/user-auth.service';

import { CropModel } from '../_models/CropModel';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  //[x: string]: Object;

 // cropList:CropModel[]=[];
  cropList= null as any;
  search ="";
  crop:any;

  constructor( private cropService:CropService , private userAuthService : UserAuthService ,private farmerService:FarmerService ) {

    //this.getAllCrop();
    //this.getAllCrop1();

    this.getMyCrops();
   


   
   }

  ngOnInit(): void {
    
  }

  // Get all the crop
getAllCrop() {
  this.cropService.getAllCrop().subscribe(
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

// get all crops under farmer

getAllCrop1() {
  this.farmerService.getAllCrop('630585904065e365d7291d28').subscribe(
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
 

getMyCrops(){



  this.farmerService.getMyCrops('string').subscribe(res=>{
 
    console.log(res);
   this.cropList=res

  })

}

}
