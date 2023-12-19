import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.scss']
})
export class FacultyDashboardComponent implements OnInit {
  faculty: any;

  constructor( private facultyservice:FacultyService, private router:Router) { }

  ngOnInit(): void {
    this.empid = JSON.parse(localStorage.getItem('faculty')!).empid
    
    this.facultyservice.ViewProfile(this.empid).subscribe((res:any)=>{
      this.faculty=res
      console.log(res);
    })
  }empid(empid: any) {
    throw new Error('Method not implemented.');
  }
logout(){
    localStorage.removeItem('faculty')
    this.router.navigate(['/faculty-login'])

  }

}
