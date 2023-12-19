import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-view-students',
  templateUrl: './faculty-view-students.component.html',
  styleUrls: ['./faculty-view-students.component.scss']
})
export class FacultyViewStudentsComponent implements OnInit {
  students: any;

  constructor( private facultyservice:FacultyService) { }

  ngOnInit(): void {
    this.facultyservice.ViewStudent().subscribe((res:any)=>{
      this.students=res
      console.log(res)
    })
  }
 

}
