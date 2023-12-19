import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlacementService } from 'src/app/shared/service/placement.service';

@Component({
  selector: 'app-placement-login',
  templateUrl: './placement-login.component.html',
  styleUrls: ['./placement-login.component.scss']
})
export class PlacementLoginComponent implements OnInit {
  placementLoginForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private placementService:PlacementService,
    private router:Router
  ) { }

  ngOnInit(): void {
this.placementLoginForm=this.fb.group({
  emailid:['',[Validators.required]],
  password:['',[Validators.required]]
})
  }
  placementLogin(){
    if(this.placementLoginForm.valid){
      this.placementService.placementLogin(this.placementLoginForm.value).subscribe(res=>{
        if(res){
          localStorage.setItem('placement',JSON.stringify(res))
          this.router.navigate(['/placement-dashboard'])
        }else{
          alert('invalid credential')
        }
        
      })
    }else{
      alert('please fill all required field')
    }

  }
}
