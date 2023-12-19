import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-view-marks',
  templateUrl: './view-marks.component.html',
  styleUrls: ['./view-marks.component.scss']
})
export class ViewMarksComponent implements OnInit {
  viewmarks:any
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    let stuMarks= JSON.parse(localStorage.getItem('student')!).hallticket

    this.studentservice.viewMarks(stuMarks).subscribe((res:any)=>{
      this.viewmarks = res
      
  })

}
}