import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FacultyService } from 'src/app/shared/service/faculty.service';
import { FacultyEditmarksComponent } from '../faculty-editmarks/faculty-editmarks.component';
import { FacultyEdittimetableComponent } from '../faculty-edittimetable/faculty-edittimetable.component';

@Component({
  selector: 'app-faculty-view-timetable',
  templateUrl: './faculty-view-timetable.component.html',
  styleUrls: ['./faculty-view-timetable.component.scss']
})
export class FacultyViewTimetableComponent implements OnInit {
  timetables: any;
  ttid:any

  constructor(private facultyservice : FacultyService,private fb : FormBuilder, private dialog:MatDialog) { }
  ViewttForm!:FormGroup
  ViewtimetableForm!:FormGroup
  ngOnInit(): void {
let branch=JSON.parse(localStorage.getItem('faculty')!).department
    this.facultyservice.ViewTimetable(branch).subscribe((res:any)=>{
      this.timetables=res
      console.log(res);
      
    })
    
       this.ViewtimetableForm=this.fb.group({
        day:['',[Validators.required]],
        branch:['',[Validators.required]],
        hour1:['9:30-10:30',[Validators.required]],
        hour2:['10:30-11:30',[Validators.required]],
        hour3:['11:30-12:30',[Validators.required]],
        hour4:['1:30-4:30',[Validators.required]],
        subject1:['',[Validators.required]],
        subject2:['',[Validators.required]],
        subject3:['',[Validators.required]],
        lab:['',[Validators.required]],
        faculty1:['',[Validators.required]],
        faculty2:['',[Validators.required]],
        faculty3:['',[Validators.required]],
        labasst:['',[Validators.required]],
        })
  }
  deletett(t:any){
    this.facultyservice.DeleteTimetable(t).subscribe((res:any)=>{
alert("Deleted Succcess" )
window.location.reload()
console.log(res)
    })
  }

Edit(tt:any){
  this.dialog.open(FacultyEdittimetableComponent,{
    width:'90%',
    height:'91%',
    data:tt,
})
}
}
