import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  OfficerList: any;
  Students: any;
  FacultyList:any
  constructor(private Api:AdminService,private Routes:Router) { }

  ngOnInit(): void {
    this.Api.getOfficer("Administration").subscribe((res:any)=>{
      // let officers=res.filter((x:any)=>x.typeofemployee=="officer")
      this.OfficerList=res.length
    })
    // this.Api.getOfficer().subscribe((res:any)=>{
    //   let faculty=res.filter((x:any)=>x.typeofemployee!="officer")
    //   this.FacultyList=faculty.length
    // })
    this.Api.TotalStudents().subscribe((res:any)=>{
      this.Students = res.length; 
    })
  }
  open(){
    this.Routes.navigate(['/admin-dashboard/admin-PlacementCell'])
  }

}
