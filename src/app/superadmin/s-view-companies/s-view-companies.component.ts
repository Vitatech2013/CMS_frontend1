import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminStdApplyJobsComponent } from 'src/app/admin/admin-placementcell/admin-std-apply-jobs/admin-std-apply-jobs.component';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';
import { SStdAllotmentorderComponent } from '../s-view-studentslist/s-std-allotmentorder/s-std-allotmentorder.component';

@Component({
  selector: 'app-s-view-companies',
  templateUrl: './s-view-companies.component.html',
  styleUrls: ['./s-view-companies.component.scss']
})
export class SViewCompaniesComponent implements OnInit {
  placements:any;
  panelOpenState = false;
  ApplyJobs: any;
  searchValue: any;

  constructor(private Api:SuperadminService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Api.viewJobs().subscribe((res:any)=>{
      this.placements = res;
      console.log(this.placements,"pl");
      
    })
    this.Api.viewApplyJobs().subscribe((res:any)=>{
      this.ApplyJobs = res;
    })
  }
  searchCandidate(){
    this.Api.SearchApplyCandidate(this.searchValue).subscribe((res:any)=>{
      this.ApplyJobs = res;
    })
  }
  details(D:any){
    this.dialog.open(AdminStdApplyJobsComponent,{
      width:"45%",
      height:"50%",
      data:D
    })
  }
  download(d:any){
    alert("Are you able to Download this file")
    // this.dialog.open(SStdAllotmentorderComponent,{
    //   width:"50%",
    //   height:"70%",
    //   data:d
    // })
  }

}
