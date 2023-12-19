import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/shared/service/student.service';
import { StudentApplyJobComponent } from '../student-apply-job/student-apply-job.component';

@Component({
  selector: 'app-student-jobs',
  templateUrl: './student-jobs.component.html',
  styleUrls: ['./student-jobs.component.scss']
})
export class StudentJobsComponent implements OnInit {
showJobStatus:any
student:any
date=new Date('yyyy-mm-dd')
  allJobs: any;
  constructor(
    private studentService:StudentService,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.student=JSON.parse(localStorage.getItem('student')!)
    this.studentService.viewJobStatus(this.student.hallticket).subscribe((res:any)=>{
      this.showJobStatus=res
    })
    this.studentService.showAllJobs().subscribe((res:any)=>{
      this.allJobs=res
    })
  }
  applyJob(j:any){
    this.dialog.open(StudentApplyJobComponent,{
      width:'50%',
      data:j
    })
  }
}
