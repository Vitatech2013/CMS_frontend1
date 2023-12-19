import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/shared/service/faculty.service';
import { PlacementService } from 'src/app/shared/service/placement.service';

@Component({
  selector: 'app-placement-profile',
  templateUrl: './placement-profile.component.html',
  styleUrls: ['./placement-profile.component.scss']
})
export class PlacementProfileComponent implements OnInit {
company:any
placementProfileForm!:FormGroup
  constructor(
    private placementService:PlacementService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    let placement=JSON.parse(localStorage.getItem('placement')!)
    console.log(placement, "pppp");
    

this.placementProfileForm = this.fb.group({
  companyname: ['', [Validators.required]],
  mobileno: ['', [Validators.required]],
  emailid: ['', [Validators.required]],
  joblocation: ['', [Validators.required]],
  jobrole: ['', [Validators.required]],
  requiredskills: ['', [Validators.required]],
  applylastdate: ['', [Validators.required]],
  companywebsite: ['', [Validators.required]],
});
this.placementService.viewProfile(placement.emailid).subscribe((res:any)=>{
  this.company=res

  this.placementProfileForm.patchValue({
    companyname:this.company.companyname ,
  mobileno:this.company.mobileno ,
  emailid: this.company.emailid,
  joblocation: this.company.joblocation,
  jobrole: this.company.jobrole,
  requiredskills: this.company.requiredskills,
  applylastdate: this.company.applylastdate,
  companywebsite: this.company.companywebsite,
  })
})

  }
updateCompany(){
  if(this.placementProfileForm.valid){
    this.placementService.updateProfile(this.company._id,this.placementProfileForm.value).subscribe((res:any)=>{
      if(res){
        this.company=res
        alert('update successfull')
      }else{
        alert('update failed')
      }
    })
  }else{
    alert('please fill rquired FormFields')
  }

}
}
