import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-edittimetable',
  templateUrl: './faculty-edittimetable.component.html',
  styleUrls: ['./faculty-edittimetable.component.scss']
})
export class FacultyEdittimetableComponent implements OnInit {
  timetables: any;
  ttid:any

  constructor(private facultyservice : FacultyService,private fb : FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any) { }
  ViewttForm!:FormGroup
  ViewtimetableForm!:FormGroup
  ngOnInit(): void {

    
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
        });
        this.ViewtimetableForm.patchValue({
          day:this.data.day,
          branch:this.data.branch,
          hour1:this.data.hour1,
          hour2:this.data.hour2,
          hour3:this.data.hour3,
          hour4:this.data.hour4,
          subject1:this.data.subject1,
          subject2:this.data.subject2,
          subject3:this.data.subject3,
          lab:this.data.lab,
          faculty1:this.data.faculty1,
          faculty2:this.data.faculty2,
          faculty3:this.data.faculty3,
          labasst:this.data.labasst,
         })
  }




UpdateTT(){
  const a= this.ViewtimetableForm.value
  console.log(this.ViewtimetableForm.value, this.ttid)
  this.facultyservice.EditTimetable(this.data._id,a).subscribe((res:any)=>{
    alert('updated succesfully')
    window.location.reload()

    console.log(res);
    
  })
}
}
