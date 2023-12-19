import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';
import { SViewFacultyDetailsComponent } from './s-view-faculty-details/s-view-faculty-details.component';

@Component({
  selector: 'app-s-view-faculty',
  templateUrl: './s-view-faculty.component.html',
  styleUrls: ['./s-view-faculty.component.scss']
})
export class SViewFacultyComponent implements OnInit {
  EEEfaculty: any;
  ECEfaculty: any;
  CSEfaculty: any;
  MECHfaculty: any;

  constructor(private Api:SuperadminService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.Api.getFaculty("EEE").subscribe((res:any)=>{
      this.EEEfaculty = res;
    })
    this.Api.getFaculty("ECE").subscribe((res:any)=>{
      this.ECEfaculty = res;
    })
    this.Api.getFaculty("CSE").subscribe((res:any)=>{
      this.CSEfaculty = res;
    })
    this.Api.getFaculty("MECH").subscribe((res:any)=>{
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
