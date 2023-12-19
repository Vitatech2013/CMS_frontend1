import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';

@Component({
  selector: 'app-superadmin-home',
  templateUrl: './superadmin-home.component.html',
  styleUrls: ['./superadmin-home.component.scss']
})
export class SuperadminHomeComponent implements OnInit {
  OfficerList: any;
  Students: any;
  FacultyList:any
  constructor(private Api:SuperadminService) { }

  ngOnInit(): void {
    this.Api.getOfficer().subscribe((res:any)=>{
      let officers=res.filter((x:any)=>x.typeofemployee=="officer")
      this.OfficerList=officers.length
    })
    this.Api.getOfficer().subscribe((res:any)=>{
      let faculty=res.filter((x:any)=>x.typeofemployee!="officer")
      this.FacultyList=faculty.length
    })
    this.Api.TotalStudents().subscribe((res:any)=>{
      this.Students = res.length; 
    })
  }

}
