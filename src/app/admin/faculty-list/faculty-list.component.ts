import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/service/admin.service';
import { SViewFacultyDetailsComponent } from 'src/app/superadmin/s-view-faculty/s-view-faculty-details/s-view-faculty-details.component';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {
  EEEfaculty: any;
  ECEfaculty: any;
  CSEfaculty: any;
  MECHfaculty: any;


  constructor(private Api:AdminService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.Api.ShowFaculty("EEE").subscribe((res:any)=>{
      this.EEEfaculty = res;
    })
    this.Api.ShowFaculty("ECE").subscribe((res:any)=>{
      this.ECEfaculty = res;
    })
    this.Api.ShowFaculty("CSE").subscribe((res:any)=>{
      this.CSEfaculty = res;
    })
    this.Api.ShowFaculty("MECH").subscribe((res:any)=>{
      this.MECHfaculty = res;
    })
  }

  open(f:any){
    this.dialog.open(SViewFacultyDetailsComponent,{
      width:"40%",
      height:"75%",
      data:f
    })
  }
}
