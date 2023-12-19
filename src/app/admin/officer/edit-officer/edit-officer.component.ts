import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/service/admin.service';
import { log } from 'console';

@Component({
  selector: 'app-edit-officer',
  templateUrl: './edit-officer.component.html',
  styleUrls: ['./edit-officer.component.scss']
})
export class EditOfficerComponent implements OnInit {
  EditOfficerForm!:FormGroup;
  photourl: any;
  aadharurl:any
  constructor(private fb:FormBuilder,
              private Api:AdminService,
              private Routes:Router,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<EditOfficerComponent>,) { }

  ngOnInit(): void {
    console.log(this.data,"check");
    

    this.EditOfficerForm = this.fb.group({
      name:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      emailid:['',[Validators.required]],
      typeofemployee:['officer',[Validators.required]],
      joiningdate:['',[Validators.required]],
      qualification:['',[Validators.required]],
      yearofexperience:['',[Validators.required]],
      designation:['',[Validators.required]],
      department:['',[Validators.required]],
      salary:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      pincode:['',[Validators.required]],
      bankname:['',[Validators.required]],
      bankaccountno:['',[Validators.required]],
      ifsccode:['',[Validators.required]],
      branchname:['',[Validators.required]],
      pancardno:['',[Validators.required]],
      photo:['',[Validators.required]],
      aadharcopy:['',[Validators.required]]
    });
    this.EditOfficerForm.patchValue({
      name:this.data.name,
      gender:this.data.gender,
      dob:this.data.dob,
      mobileno:this.data.mobileno,
      emailid:this.data.emailid,
      typeofemployee:this.data.typeofemployee,
      joiningdate:this.data.joiningdate,
      qualification:this.data.qualification,
      yearofexperience:this.data.yearofexperience,
      designation:this.data.designation,
      department:this.data.department,
      salary:this.data.salary,
      address:this.data.address,
      city:this.data.city,
      state:this.data.state,
      pincode:this.data.pincode,
      bankname:this.data.bankname,
      bankaccountno:this.data.bankaccountno,
      ifsccode:this.data.ifsccode,
      branchname:this.data.branchname,
      pancardno:this.data.pancardno,
    })
  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.photourl = event.target?.result;
      }
    }
  }

  onSelectAadharFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.aadharurl = event.target?.result;
      }
    }
  }
  UpdateOfficer(){
    const O ={
      ...this.EditOfficerForm.value,
      photo:this.photourl,
      aadharcopy:this.aadharurl
    }
    if(this.EditOfficerForm.valid){
    this.Api.editOfficer(this.data._id,O).subscribe((res:any)=>{
      if(res){
        alert("Update Profile Successfully")
        window.location.reload()
      }else{
        alert("Not Updated")
      }
    })
    }
  }
}
