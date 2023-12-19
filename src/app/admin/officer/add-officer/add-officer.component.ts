import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-add-officer',
  templateUrl: './add-officer.component.html',
  styleUrls: ['./add-officer.component.scss'],
})
export class AddOfficerComponent implements OnInit {
  AddOfficerForm!: FormGroup;
  photourl: any;
  aadharurl: any;
  x: any;
   TypeOfOfficer:any

  constructor(
    private fb: FormBuilder,
    private Api: AdminService,
    private Routes: Router
  ) {}

  ngOnInit(): void {
    this.Api.getOfficer("Administration").subscribe((res:any)=>{
      this.TypeOfOfficer=['administrative officer','placement officer','accounts officer']
      res.map((y:any)=>{
        let designations= y.designation
        this.TypeOfOfficer=this.TypeOfOfficer.filter((x:any)=>x !=designations)

      })
  
      
      
      
    })
    this.AddOfficerForm = this.fb.group({
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      typeofemployee: ['officer',[Validators.required]],
      qualification: ['', [Validators.required]],
      yearofexperience: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      department: ['Administration', [Validators.required]],
      salary: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      bankname: ['', [Validators.required]],
      bankaccountno: ['', [Validators.required]],
      ifsccode: ['', [Validators.required]],
      branchname: ['', [Validators.required]],
      pancardno: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      aadharcopy: ['', [Validators.required]],
    });
  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.photourl = event.target?.result;
      };
    }
  }

  onSelectAadharFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.aadharurl = event.target?.result;
      };
    }
  }
  AddOfficer() {
    this.x = 'EMP' + Math.floor(Math.random() * 10000 + 1);
    let pwd=Math.floor(Math.random() * 1000000 + 1)
    let data = {
      ...this.AddOfficerForm.value,
      empid: this.x,
      password:pwd,
      joiningdate:new Date(),
      photo: this.photourl,
      aadharcopy: this.aadharurl,
    };
    console.log(data);

    if (this.AddOfficerForm.valid) {
      this.Api.addOfficer(data).subscribe((res: any) => {
        if (res) {
          alert('officer Register Successfull');
          window.location.reload()
        } else {
          alert('something went wrong');
        }
      });
    }
  }
}
