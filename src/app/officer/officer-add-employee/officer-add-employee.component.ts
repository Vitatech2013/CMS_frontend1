import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-add-employee',
  templateUrl: './officer-add-employee.component.html',
  styleUrls: ['./officer-add-employee.component.scss'],
})
export class OfficerAddEmployeeComponent implements OnInit {
  AddEmpForm!: FormGroup;
  photourl: any;
  aadharurl: any;
  x: any;

  constructor(
    private fb: FormBuilder,
    private officerApi: OfficerService,
    private Routes: Router
  ) {}

  ngOnInit(): void {
    this.AddEmpForm = this.fb.group({
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      typeofemployee: ['', [Validators.required]],
      joiningdate: ['', [Validators.required]],
      qualification: ['', [Validators.required]],
      yearofexperience: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      department: ['', [Validators.required]],
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
  AddEmployee() {
    this.x = 'EMP' + Math.floor(Math.random() * 10000 + 1);
    let data = {
      ...this.AddEmpForm.value,
      empid: this.x,
      photo: this.photourl,
      aadharcopy: this.aadharurl,
    };


    this.officerApi.addEmployees(data).subscribe((res: any) => {
     alert('Employee added successfully...')
    });
  }
}
