import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-view-timetable',
  templateUrl: './view-timetable.component.html',
  styleUrls: ['./view-timetable.component.scss']
})
export class ViewTimetableComponent implements OnInit {
  
  timetable:any
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
   
    let Sbranch = JSON.parse(localStorage.getItem('student')!).branch

    this.studentservice.viewTimetable(Sbranch).subscribe((res:any)=>{
      this.timetable = res
      console.log( this.timetable,'vt');
      
    })
  }

}
