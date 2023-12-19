import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';

@Component({
  selector: 'app-superadmin-login',
  templateUrl: './superadmin-login.component.html',
  styleUrls: ['./superadmin-login.component.scss']
})
export class SuperadminLoginComponent implements OnInit {

  SuperAdminLoginForm!:FormGroup
  admin: any;

  constructor(private SadminApi:SuperadminService,
              private fb:FormBuilder,
              private Routes:Router) { }

  ngOnInit(): void {
    this.SuperAdminLoginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  Sadminlogin(){
    if(this.SuperAdminLoginForm.valid){
      let UserName = this.SuperAdminLoginForm.get('username')?.value
      let Password = this.SuperAdminLoginForm.get('password')?.value
  
      this.SadminApi.getSuperadmin(UserName,Password).subscribe((res:any)=>{
        if(res){
          localStorage.setItem('superadmin',JSON.stringify(res))
           this.Routes.navigate(['superadmin-dashboard'])
        }else{
          alert("Invalid Credentials")
        }
      })
    }
    
  }

}
