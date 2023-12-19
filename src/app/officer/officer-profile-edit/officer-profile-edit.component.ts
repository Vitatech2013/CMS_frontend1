import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-profile-edit',
  templateUrl: './officer-profile-edit.component.html',
  styleUrls: ['./officer-profile-edit.component.scss'],
})
export class OfficerProfileEditComponent implements OnInit {
  editProfileForm!: FormGroup;
  photourl: any;
  aadharurl: any;
  x: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private officerApi: OfficerService,
    private dialogRef: MatDialogRef<OfficerProfileEditComponent>
  ) {}

  ngOnInit(): void {
    this.editProfileForm = this.fb.group({
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

    this.editProfileForm.patchValue({
      name: this.data.name,
      gender: this.data.gender,
      dob: this.data.dob,
      mobileno: this.data.mobileno,
      emailid: this.data.emailid,
      typeofemployee: this.data.typeofemployee,
      joiningdate: this.data.joiningdate,
      qualification: this.data.qualification,
      yearofexperience: this.data.yearofexperience,
      designation: this.data.designation,
      department: this.data.department,
      salary: this.data.salary,
      address: this.data.address,
      city: this.data.city,
      state: this.data.state,
      pincode: this.data.pincode,
      bankname: this.data.bankname,
      bankaccountno: this.data.bankaccountno,
      ifsccode: this.data.ifsccode,
      branchname: this.data.branchname,
      pancardno: this.data.pancardno,
      photo: this.data.photo,
      aadharcopy: this.data.aadharcopy,
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

  editProfile() {
    this.officerApi
      .updateOfficerProfile(this.data._id, this.editProfileForm.value)
      .subscribe((res: any) => {
        console.log(res);
      });
      this.dialogRef.close();
      window.location.reload();
  }
}
