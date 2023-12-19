import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';
import { SViewOfficerDetailsComponent } from './s-view-officer-details/s-view-officer-details.component';

@Component({
  selector: 'app-s-view-officer',
  templateUrl: './s-view-officer.component.html',
  styleUrls: ['./s-view-officer.component.scss']
})
export class SViewOfficerComponent implements OnInit {
  OfficerList: any;

  constructor(private Api:SuperadminService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Api.getOfficer().subscribe((res:any)=>{
      this.OfficerList = res; 
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
