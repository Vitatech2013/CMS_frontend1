import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from 'express';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-add-student-fee',
  templateUrl: './officer-add-student-fee.component.html',
  styleUrls: ['./officer-add-student-fee.component.scss'],
})
export class OfficerAddStudentFeeComponent implements OnInit {
  editStudentFeeForm!: FormGroup;
  fees: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private officerApi: OfficerService,
    private dialogRef: MatDialogRef<OfficerAddStudentFeeComponent>
  ) {
    this.officerApi.viewStudentFees().subscribe((res: any) => {
      this.fees = res;
      console.log(this.fees);
    });
  }

  ngOnInit(): void {
    this.editStudentFeeForm = this.fb.group({
      hallticket: ['', [Validators.required]],
      studentname: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      admissionfee: ['', [Validators.required]],
      admissionfeestatus: ['', [Validators.required]],
      collegefee: ['', [Validators.required]],
      collegefeestatus: ['', [Validators.required]],
      libraryfee: ['', [Validators.required]],
      libraryfeestatus: ['', [Validators.required]],
      jntufee: ['', [Validators.required]],
      jntufeestatus: ['', [Validators.required]],
      busfee: ['', [Validators.required]],
      busfeestatus: ['', [Validators.required]],
      hostelfee: ['', [Validators.required]],
      hostelfeestatus: ['', [Validators.required]],
      clearedby: ['', [Validators.required]],
    });

    this.editStudentFeeForm.patchValue({
      hallticket: this.data.hallticket,
      studentname: this.data.studentname,
      branch: this.data.branch,
      admissionfee: this.data.admissionfee,
      admissionfeestatus: this.data.admissionfeestatus,
      collegefee: this.data.collegefee,
      collegefeestatus: this.data.collegefeestatus,
      libraryfee: this.data.libraryfee,
      libraryfeestatus: this.data.libraryfeestatus,
      jntufee: this.data.jntufee,
      jntufeestatus: this.data.jntufeestatus,
      busfee: this.data.busfee,
      busfeestatus: this.data.busfeestatus,
      hostelfee: this.data.hostelfee,
      hostelfeestatus: this.data.hostelfeestatus,
      clearedby: this.data.clearedby,
    });
  }

  editStudentFee() {
    this.officerApi
      .updateStudentFee(this.data._id, this.editStudentFeeForm.value)
      .subscribe((res: any) => {

      });
      this.dialogRef.close();
    window.location.reload();
  }
}
