import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/shared/service/student.service';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  student:any
  
  

  constructor(
    private studentservice:StudentService,
    private dialog:MatDialog) { }
    
  ngOnInit(): void {
    let stuhallticket = JSON.parse(localStorage.getItem('student')!).hallticket

     this.studentservice.studentProfile(stuhallticket).subscribe((res:any)=>{
      this.student = res  
     })
    

    
  }
  edit(){
    this.dialog.open(UpdateProfileComponent,{
      data:this.student
    })
  }
  

}
