import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {

  constructor( private fb :FormBuilder,private router:Router,private studentService:StudentService) { }

  studentLogin = this.fb.group({
    hallticket:['',[Validators.required]],
    mobileno:['',[Validators.required]],
  })

  ngOnInit(): void {}
  get hallticket(){ return this.studentLogin.get('hallticket')}
  get mobileno(){ return this.studentLogin.get('mobileno')}

submit(){
  this.studentService.studentLogin(this.studentLogin.value.hallticket,this.studentLogin.value.mobileno).subscribe((res:any)=>{
    console.log(res);
    
    if(res){
      alert('Login suceess'),
      localStorage.setItem('student', JSON.stringify(res))
      this.router.navigate(['/student-dashboard'])
    }else{
      alert('Login failed')
    }
  })
}
}
