import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-placement',
  templateUrl: './officer-placement.component.html',
  styleUrls: ['./officer-placement.component.scss'],
})
export class OfficerPlacementComponent implements OnInit {
  searchStudent() {
    throw new Error('Method not implemented.');
  }
  addPlacementForm!: FormGroup;
  placements: any;
  studentJobs: any;
  SearchValue: any;
  constructor(private fb: FormBuilder, private officerApi: OfficerService) {}

  ngOnInit(): void {
    const pswd = Math.random().toString(36).slice(-6);

    this.addPlacementForm = this.fb.group({
      companyname: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      password: pswd,
      joblocation: ['', [Validators.required]],
      jobrole: ['', [Validators.required]],
      requiredskills: ['', [Validators.required]],
      applylastdate: ['', [Validators.required]],
      companywebsite: ['', [Validators.required]],
    });

    this.officerApi.viewPlacement().subscribe((res: any) => {
      this.placements = res;
      console.log(res);
    });

    this.officerApi.viewStudentJobs().subscribe((res: any) => {
      this.studentJobs = res;
      console.log(res);
    });
  }
  searchStudentJobs() {
    let studentht = this.SearchValue;
    console.log(studentht);
    
    this.officerApi.searchJobs(studentht).subscribe((res: any) => {
      console.log(res);
      
      this.placements = res;
    });
  }

  addCompany() {
    this.officerApi
      .addPlacemnet(this.addPlacementForm.value)
      .subscribe((res: any) => {
        console.log(res, 'placements');
      });
    window.location.reload();
  }
}
