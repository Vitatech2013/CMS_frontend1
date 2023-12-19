import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  
  editProfile!:FormGroup
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private studentservice:StudentService,
    private fb:FormBuilder,
    
    ) { }

  ngOnInit(): void {
    this.editProfile= this.fb.group({
      mobileno:['',[Validators.required]],
      emailid:['',[Validators.required]],
      parentsmobileno:['',[Validators.required]],
      dob:['',[Validators.required]],
      address:['',[Validators.required]],
      typeofStudent:['',[Validators.required]],
    })
    this.editProfile.patchValue({
      mobileno:this.data.mobileno,
      emailid:this.data.emailid,
      dob:this.data.dob,
      parentsmobileno:this.data.parentsmobileno,
     address:this.data.address,
     typeofStudent:this.data.typeofStudent
   })
  }
  update(){
    this.studentservice.updateProfile(this.data._id,this.editProfile.value).subscribe((res:any)=>{
    window.location.reload()
     alert('Update sucessfully')
    })
   }
}
