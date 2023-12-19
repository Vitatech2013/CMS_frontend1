import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-student-apply-job',
  templateUrl: './student-apply-job.component.html',
  styleUrls: ['./student-apply-job.component.scss']
})
export class StudentApplyJobComponent implements OnInit {
  applyJobForm!:FormGroup
  student:any
  myResume: string | ArrayBuffer | null | undefined;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private studentService:StudentService,
    private dialogref:MatDialogRef<StudentApplyJobComponent>
  ) { }

  ngOnInit(): void {
    this.student=JSON.parse(localStorage.getItem('student')!)
    this.applyJobForm=this.fb.group({
      name:['',[Validators.required]],
    hallticket:['',[Validators.required]],
    dob:['',[Validators.required]], 
    emailid:['',[Validators.required]], 
    mobilenumber:['',[Validators.required]], 
    branch:['',[Validators.required]],
    sscpercentage:['',[Validators.required]], 
    interpercentage:['',[Validators.required]],
    degreepercentage:['',[Validators.required]],
    companyname:['',[Validators.required]],
    jobrole:['',[Validators.required]],
    skills:['',[Validators.required]],
    address:['',[Validators.required]],
    resume:['',[Validators.required]],
    })
    this.applyJobForm.patchValue({
      name:this.student.firstname,
      hallticket:this.student.hallticket,
      dob:this.student.dob, 
      emailid:this.student.emailid, 
      mobilenumber:this.student.mobileno, 
      branch:this.student.branch,
      companyname:this.data.companyname,
      jobrole:this.data.jobrole,
      address:this.student.address,
    })
  }
  onSelectFile(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.myResume = event.target?.result;
      };
    }
  }
  applyJob(){
    if(this.applyJobForm.valid){
      let data={
        ...this.applyJobForm.value,
        resume:this.myResume,
        remarks:'',
        status:'pending',
        interview:''
      }
   this.studentService.applyForJob(data).subscribe((res:any)=>{
    this.dialogref.close()
   })
      
    }
    
  }
}
