import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-add-fee',
  templateUrl: './officer-add-fee.component.html',
  styleUrls: ['./officer-add-fee.component.scss'],
})
export class OfficerAddFeeComponent implements OnInit {
  feeForm!: FormGroup;
  Oid: any;
  feeId: any;
  fees: any;
  addBtn: boolean = true;
  updateBtn: boolean = false;
  selectedYear: number;
  years: number[] = [];
  constructor(
    private fb: FormBuilder,
    private officerApi: OfficerService,
    private Routes: Router
  ) {
    this.selectedYear = new Date().getFullYear();
  let baseyear=2020
  for(let i=baseyear;i<=2026;i++){
    this.years.push(i)
  }
  }

  ngOnInit(): void {
    this.Oid = JSON.parse(localStorage.getItem('officer')!);
    this.officerApi.viewFees().subscribe((res: any) => {
      this.fees = res;
      console.log(this.fees, 'fees');
    });
    this.feeForm = this.fb.group({
      year: [this.selectedYear, [Validators.required]],
      admissionfee: ['', [Validators.required]],
      collegefee: ['', [Validators.required]],
      libraryfee: ['', [Validators.required]],
      jntufee: ['', [Validators.required]],
      busfee: ['', [Validators.required]],
      hostelfee: ['', [Validators.required]],
    });
  }

  addFee() {
    console.log('sfbgjhkxfl');

    let d = {
      empid: this.Oid.empid,
      ...this.feeForm.value,
    };
    if(this.feeForm.valid){
      this.officerApi.addFees(d).subscribe((res: any) => {
        console.log(res, 'add');
        window.location.reload();
      });
    }else{
      alert('plese fill all the required fields')
    }
    
   
  }
  editFee(s: any) {
    this.feeId = s._id;
    this.feeForm.patchValue({
      admissionfee: s.admissionfee,
      collegefee: s.collegefee,
      libraryfee: s.libraryfee,
      jntufee: s.jntufee,
      busfee: s.busfee,
      hostelfee: s.hostelfee,
    });

    this.updateBtn = true;
    this.addBtn = false;
  }
  updateFee() {
    this.officerApi
      .updateFee(this.feeId, this.feeForm.value)
      .subscribe((res: any) => {
        console.log(res, 'updated');
      });
    window.location.reload();
  }
}
