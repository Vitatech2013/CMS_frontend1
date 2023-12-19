import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-editmarks',
  templateUrl: './faculty-editmarks.component.html',
  styleUrls: ['./faculty-editmarks.component.scss']
})
export class FacultyEditmarksComponent implements OnInit {

  marks: any=[];
  students: any;
  StudentForm!:FormGroup
  Viewmarks!:FormGroup
  dataid: any;
    constructor(private facultyservice:FacultyService,private fb :FormBuilder,    @Inject(MAT_DIALOG_DATA) public data:any,
    ) { }

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
    this.Viewmarks.patchValue({
      hallticket:this.data.hallticket,
      studentname:this.data.studentname,
      branch:this.data.branch,
      sem:this.data.sem,
      subject1:this.data.subject1,
      subject1totalmarks:this.data.subject1totalmarks,
      subject1marks:this.data.subject1marks,
      subject2:this.data.subject2,
      subject2totalmarks:this.data.subject2totalmarks,
      subject2marks:this.data.subject2marks,
      subject3:this.data.subject3,
      subject3totalmarks:this.data.subject3totalmarks,
      subject3marks:this.data.subject3marks,
      totalMarks:this.data.totalMarks,
      totalscoredmarks:this.data.totalscoredmarks,
      percentage:this.data.percentage,
      status:this.data.status,
    })

  }

Updatemarks(){
  const a={
    ...this.Viewmarks.value
  }
  this.facultyservice.EditMarks(this.data._id,a).subscribe((res:any)=>{
    alert('updated succesfully')
    window.location.reload()
    console.log(res);
    
  })
}
}

