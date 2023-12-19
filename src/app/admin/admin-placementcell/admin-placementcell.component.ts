import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/service/admin.service';
import { AdminStdApplyJobsComponent } from './admin-std-apply-jobs/admin-std-apply-jobs.component';

@Component({
  selector: 'app-admin-placementcell',
  templateUrl: './admin-placementcell.component.html',
  styleUrls: ['./admin-placementcell.component.scss']
})
export class AdminPlacementcellComponent implements OnInit {
  placements:any;
  panelOpenState = false;
  ApplyJobs: any;
  searchValue: any;

  constructor(private Api:AdminService,private dialog:MatDialog) { }

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
  resume(){
    alert("Are You Sure to Download Resume")
  }
  
}
