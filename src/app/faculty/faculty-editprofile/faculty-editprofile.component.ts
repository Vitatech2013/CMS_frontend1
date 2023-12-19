import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-editprofile',
  templateUrl: './faculty-editprofile.component.html',
  styleUrls: ['./faculty-editprofile.component.scss']
})
export class FacultyEditprofileComponent implements OnInit {
  faculty: any;
empid:any
EditEmpForm!: FormGroup;
photourl: any;
x: any;
  constructor( private facultyservice:FacultyService,private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<FacultyEditprofileComponent>
    ) { }

  ngOnInit(): void {
    console.log(this.data,"data");
    
    // this.empid = JSON.parse(localStorage.getItem('faculty')!).empid

      
      this.EditEmpForm = this.fb.group({
        empid:['',[Validators.required]],
        name: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        mobileno: ['', [Validators.required]],
        emailid: ['', [Validators.required]],
        joiningdate: ['', [Validators.required]],
        yearofexperience: ['', [Validators.required]],
        designation: ['', [Validators.required]],
        department: ['', [Validators.required]],
        address: ['', [Validators.required]],
        photo: ['', [Validators.required]],
      });
      this.EditEmpForm.patchValue({
        empid : this.data.empid,
        name : this.data.name,
        gender : this.data.gender,
       emailid : this.data.emailid,
       mobileno : this.data.mobileno,
       dob : this.data.dob,
       designation:this.data.designation,
       department:this.data.department,
       yearofexperience:this.data.yearofexperience,
       joiningdate:this.data.joiningdate,
       address:this.data.address,
   
     })
    }
    onSelectFile(event: any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
          this.photourl = event.target?.result;
        };
      }
    }

    UpdateProfile(){
      const a={
        ...this.EditEmpForm.value,
        photo:this.photourl
      }
    
this.facultyservice.EditProfile(this.data._id,a).subscribe((res:any)=>{
  alert('updated succesfully')
  this.dialogRef.close();
  window.location.reload();  console.log(res);
  
})
    }

}
