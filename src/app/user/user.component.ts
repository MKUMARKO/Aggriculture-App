import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message;
  userDetails = null as any;
  constructor(private userService: UserService) { 

    
  }

  ngOnInit(): void {
    
  }

  
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

  viewUser(user:any) {
    this.userService.getUser(user.id).subscribe(
   
      (resp) => {
        console.log(resp);
        this.userDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );

    
  }

/*
  getStudentsDetails() {
    this.studentService.getStudents().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  */

}
