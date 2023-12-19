import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  AdminLoginForm!:FormGroup
  admin: any;

  constructor(private AdminApi:AdminService,
              private fb:FormBuilder,
              private Routes:Router) { }

  ngOnInit(): void {
    this.AdminLoginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  adminlogin(){
    if(this.AdminLoginForm.valid){
    let UserName = this.AdminLoginForm.get('username')?.value
    let Password = this.AdminLoginForm.get('password')?.value

    this.AdminApi.getAdmin(UserName,Password).subscribe((res:any)=>{
      if(res){
        localStorage.setItem('admin',JSON.stringify(res))
        this.Routes.navigate(['admin-dashboard'])
      }else{
        alert("Invalid Credentials")
      }
    })
  }
}
}
