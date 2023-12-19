import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlacementService } from 'src/app/shared/service/placement.service';
import { PlacementChangeStatusComponent } from '../placement-change-status/placement-change-status.component';

@Component({
  selector: 'app-placement-jobs',
  templateUrl: './placement-jobs.component.html',
  styleUrls: ['./placement-jobs.component.scss']
})
export class PlacementJobsComponent implements OnInit {
students:any
  constructor(
    private placementSerive:PlacementService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    let cname= JSON.parse(localStorage.getItem('placement')!).companyname

    this.placementSerive.viewAppliedStudents(cname).subscribe(res=>{
      this.students=res      
    })
  }
  downloadResume(resume:any){
  
    window.open(resume)
  }
  changeStatus(a:any){
    this.dialog.open(PlacementChangeStatusComponent,{
      width:"50%",
      data:a
    }).afterClosed().subscribe(res=>{
      this.ngOnInit()
    })
  }
}
