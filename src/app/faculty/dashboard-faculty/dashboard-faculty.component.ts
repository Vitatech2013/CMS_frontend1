import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-dashboard-faculty',
  templateUrl: './dashboard-faculty.component.html',
  styleUrls: ['./dashboard-faculty.component.scss']
})
export class DashboardFacultyComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    faculty: any;

    constructor(private breakpointObserver: BreakpointObserver,private facultyservice : FacultyService) {}
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
    }
  }
  
    
  
