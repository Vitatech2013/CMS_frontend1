import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-edit-student',
  templateUrl: './officer-edit-student.component.html',
  styleUrls: ['./officer-edit-student.component.scss'],
})
export class OfficerEditStudentComponent implements OnInit {
  studentEditForm!: FormGroup;
  htn: any;
  photourl: any;
  aadharurl: any;
  AOurl: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private officerApi: OfficerService,
    private dialogRef: MatDialogRef<OfficerEditStudentComponent>
  ) {}

  ngOnInit(): void {
    this.studentEditForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      hallticket: ['', [Validators.required]],
      religion: ['', [Validators.required]],
      caste: ['', [Validators.required]],
      parentname: ['', [Validators.required]],
      parentprofession: ['', [Validators.required]],
      parentsmobileno: ['', [Validators.required]],
      familyincome: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      eamcetrank: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      typeofStudent: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      aadharcopy: ['', [Validators.required]],
      allotmentorder: ['', [Validators.required]],
      adminssionfee: ['', [Validators.required]],
      status: ['Paid', [Validators.required]],
    });

    this.studentEditForm.patchValue({
      id: this.data.id,
      firstname: this.data.firstname,
      lastname: this.data.lastname,
      gender: this.data.gender,
      dob: this.data.dob,
      mobileno: this.data.mobileno,
      emailid: this.data.emailid,
      hallticket: this.data.hallticket,
      religion: this.data.religion,
      caste: this.data.caste,
      parentname: this.data.parentname,
      parentprofession: this.data.parentprofession,
      parentsmobileno: this.data.parentsmobileno,
      familyincome: this.data.familyincome,
      address: this.data.address,
      city: this.data.city,
      state: this.data.state,
      eamcetrank: this.data.eamcetrank,
      branch: this.data.branch,
      typeofStudent: this.data.typeofStudent,
      photo: this.data.photo,
      aadharcopy: this.data.aadharcopy,
      allotmentorder: this.data.allotmentorder,
      adminssionfee: this.data.adminssionfee,
      status: this.data.status,
    });
  }

  onSelectPhotoFile(event: any) {
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
  onSelectAltmtOrderFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.AOurl = event.target?.result;
      };
    }
  }

  updateStudent() {
    this.officerApi
      .editStudents(this.data._id, this.studentEditForm.value)
      .subscribe((res: any) => {
        console.log(res, 'edit');
      });
    this.dialogRef.close();
    window.location.reload();
  }
}
