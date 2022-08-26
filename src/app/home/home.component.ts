import { Component, OnInit } from '@angular/core';
import { CropService } from '../_services/crop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cropService:CropService) {

    this.getAllCrop();
   }

  ngOnInit(): void {
  }

  cropList:any;
  search="";

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

}
