import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FacultyService } from 'src/app/shared/service/faculty.service';
import { FacultyEditmarksComponent } from '../faculty-editmarks/faculty-editmarks.component';

@Component({
  selector: 'app-faculty-view-marks',
  templateUrl: './faculty-view-marks.component.html',
  styleUrls: ['./faculty-view-marks.component.scss']
})
export class FacultyViewMarksComponent implements OnInit {
  marks: any=[];
  students: any;
  StudentForm!:FormGroup
  Viewmarks!:FormGroup
  mmid: any;
    constructor(private facultyservice:FacultyService,private fb :FormBuilder,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.facultyservice.ViewMarks().subscribe((res:any)=>{
      this.marks=res
      console.log(res)
    });
    this.StudentForm=this.fb.group({
      hallticket:['',[Validators.required]]
    });
    this.Viewmarks=this.fb.group({
      hallticket:['',[Validators.required]],
      studentname:['',[Validators.required]],
      branch:['',[Validators.required]],
      sem:['',[Validators.required]],
      subject1:['',[Validators.required]],
      subject1totalmarks:['',[Validators.required]],
      subject1marks:['',[Validators.required]],
      subject2:['',[Validators.required]],
      subject2totalmarks:['',[Validators.required]],
      subject2marks:['',[Validators.required]],
      subject3:['',[Validators.required]],
      subject3totalmarks:['',[Validators.required]],
      subject3marks:['',[Validators.required]],
      totalMarks:['',[Validators.required]],
      totalscoredmarks:['',[Validators.required]],
      percentage:['',[Validators.required]],
      status:['',[Validators.required]],
    });

  }
  
  search(){
    if(this.StudentForm.valid){
    this.facultyservice.ViewStudentMarks(this.StudentForm.value.hallticket).subscribe((res:any)=>{
      this.marks=[res]
    })
  }else{
    alert('please enter hallticket number')
  }
  }
  Delete(m:any){
    this.facultyservice.DeleteMarks(m).subscribe((res:any)=>{
      alert('deleted')
      window.location.reload()

    })
  }
Edit(mm:any){
  this.dialog.open(FacultyEditmarksComponent,{
    width:'80%',
    height:'100%',
    data:mm,
})

}}
