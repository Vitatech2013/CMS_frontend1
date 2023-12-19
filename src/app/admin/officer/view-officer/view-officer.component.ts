import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { log } from 'console';
import { AdminService } from 'src/app/shared/service/admin.service';
import { EditOfficerComponent } from '../edit-officer/edit-officer.component';
import { DeleteOfficerComponent } from '../delete-officer/delete-officer.component';
import { SViewOfficerDetailsComponent } from 'src/app/superadmin/s-view-officer/s-view-officer-details/s-view-officer-details.component';

@Component({
  selector: 'app-view-officer',
  templateUrl: './view-officer.component.html',
  styleUrls: ['./view-officer.component.scss']
})
export class ViewOfficerComponent implements OnInit {
  OfficerList:any;

  constructor(private Api:AdminService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Api.getOfficer("Administration").subscribe((res:any)=>{
      this.OfficerList = res; 
    })
  }
  editOfficer(e:any){
    this.dialog.open(EditOfficerComponent,{
      width:"70%",
      height:"50%",
      data:e
    })
  }
  deleteOfficer(d:any){
    this.dialog.open(DeleteOfficerComponent,{
      width:"25%",
      height:"28%",
      data:d
    })
  }
  open(o:any){
    this.dialog.open(SViewOfficerDetailsComponent,{
      width:"40%",
      height:"75%",
      data:o
    })
  }
}
