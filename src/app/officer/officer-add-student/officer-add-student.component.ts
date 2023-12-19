import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-add-student',
  templateUrl: './officer-add-student.component.html',
  styleUrls: ['./officer-add-student.component.scss'],
})
export class OfficerAddStudentComponent implements OnInit {
  studentRegForm!: FormGroup;
  htn: any;
  photourl: any;
  aadharurl: any;
  AOurl: any;
  fees: any;
  constructor(
    private fb: FormBuilder,
    private officerApi: OfficerService,
    private Routes: Router
  ) {}

  ngOnInit(): void {
    this.studentRegForm = this.fb.group({
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
    this.officerApi.viewFees().subscribe((res: any) => {
      res.map((f: any) => {
        this.fees = f;
        this.studentRegForm.patchValue({
          adminssionfee: f.admissionfee,
        });
      });
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
  selectedBranch(event:any){
    this.officerApi.getBranchwiseStudents(event).subscribe((res:any)=>{
      let studentcount=(res.length+1).toString()
      var str=studentcount
      var pad='00'
      var ans=pad.substring(0,pad.length-str.length)+str
      console.log(ans);
      
      let branchCode;
if(event=="ECE"){
branchCode="04"
}else if(event=="EEE"){
branchCode="02"
} else if(event=="CSE"){
branchCode="05"
} else if(event=="IT"){
branchCode="12"
}  
let year= new Date().getFullYear().toString().substring(2)
let collegeCode="01"
let regulation="1A"
let ht=year+collegeCode+regulation+branchCode+ans
this.studentRegForm.patchValue({
  hallticket:ht
})
    })

  }
  studentReg() {
    let o = JSON.parse(localStorage.getItem('officer')!).empid;

    let data = {
      ...this.studentRegForm.value,
      photo: this.photourl,
      aadharcopy: this.aadharurl,
      allotmentorder: this.AOurl,
    };
    let feedata = {
      hallticket: this.studentRegForm.value.hallticket,
      studentname: this.studentRegForm.value.firstname,
      branch: this.studentRegForm.value.branch,
      admissionfee: this.fees.admissionfee,
      admissionfeestatus: 'paid',
      collegefee: this.fees.collegefee,
      collegefeestatus: 'due',
      libraryfee: this.fees.libraryfee,
      libraryfeestatus: 'due',
      jntufee: this.fees.jntufee,
      jntufeestatus: 'due',
      busfee: this.fees.busfee,
      busfeestatus: 'due',
      busfacility: 'no',
      hostelfee: this.fees.hostelfee,
      hostelfeestatus: 'due',
      clearedby: o,
    };
    console.log(data, feedata, 'check');

    this.officerApi.addStudents(data).subscribe((res: any) => {
      console.log(res);
      alert('Student Added Successfully...');
    });
  }
}
