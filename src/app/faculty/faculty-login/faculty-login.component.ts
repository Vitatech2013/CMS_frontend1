import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.scss']
})
export class FacultyLoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private facultyservice : FacultyService,private route:Router) { }
  FacultyLoginForm !: FormGroup;
  ngOnInit(): void {
    this.FacultyLoginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  facultylogin(){
    if(this.FacultyLoginForm.valid){
    let UserName = this.FacultyLoginForm.get('username')?.value
    let Password = this.FacultyLoginForm.get('password')?.value
    let toe="faculty"

    this.facultyservice.FacultyLogin(UserName,Password,toe).subscribe((res:any)=>{
      console.log(res);
      
      if(res){
        localStorage.setItem('faculty',JSON.stringify(res));
        alert("Login Success")
        this.route.navigate(['/faculty-dashboard'])
        
        console.log(res)
      }else{
        alert("Invalid Credentials")
      }
    })
  }
}
}