import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FacultyService } from 'src/app/shared/service/faculty.service';
import { FacultyEditprofileComponent } from '../faculty-editprofile/faculty-editprofile.component';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.scss']
})
export class FacultyProfileComponent implements OnInit {
  faculty: any;
empid:any
AddEmpForm!: FormGroup;
photourl: any;
x: any;
  constructor( private facultyservice:FacultyService,private fb : FormBuilder,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.empid = JSON.parse(localStorage.getItem('faculty')!).empid
    
    this.facultyservice.ViewProfile(this.empid).subscribe((res:any)=>{
      this.faculty=res
      console.log(res);
    })
      
      this.AddEmpForm = this.fb.group({
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
Edit(e:any){
  console.log(e);
  
this.dialog.open(FacultyEditprofileComponent,{
  width:'90%',
  height:'91%',
  data:e,
})

}

  }

