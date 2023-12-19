import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-add-timetable',
  templateUrl: './faculty-add-timetable.component.html',
  styleUrls: ['./faculty-add-timetable.component.scss']
})
export class FacultyAddTimetableComponent implements OnInit {

  constructor(private facultyservice : FacultyService,private fb : FormBuilder) { }
  TimetableForm!:FormGroup
  ngOnInit(): void {
    
this.TimetableForm=this.fb.group({
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
  AddTT(){
    console.log(this.TimetableForm.value.lab);
    
if(this.TimetableForm.valid){
this.facultyservice.AddTimetable(this.TimetableForm.value).subscribe((res:any)=>{
  alert("Added Success")
  window.location.reload()

  console.log(res);
  
})
}else{
  alert("Something went wrong")
}


}
}
