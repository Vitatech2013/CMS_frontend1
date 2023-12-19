import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlacementService } from 'src/app/shared/service/placement.service';

@Component({
  selector: 'app-placement-change-status',
  templateUrl: './placement-change-status.component.html',
  styleUrls: ['./placement-change-status.component.scss']
})
export class PlacementChangeStatusComponent implements OnInit {
interviewFlag:boolean=true
remarkFlag:boolean=true
statusChangeForm!:FormGroup
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb:FormBuilder,
    private placementService:PlacementService,
    private dialogref:MatDialogRef<PlacementChangeStatusComponent>
  ) { }

  ngOnInit(): void {
 this.statusChangeForm=this.fb.group({
  status:['',[Validators.required]],
  remarks:[''],
  interview:['']
 })
 this.statusChangeForm.patchValue({
  status:this.data.status,
  remarks:this.data.remarks,
  interview:this.data.interview

 })
    
  }
  statusValue(a:any){
    if(a=="accept"){
      this.interviewFlag=false
      this.remarkFlag=true
    }else if(a=="reject"){
      this.remarkFlag=false
      this.interviewFlag=true
    }else{
      this.interviewFlag=true
      this.remarkFlag=true
    }
  }

  StatusChange(){
this.placementService.statusUpdate(this.data._id,this.statusChangeForm.value).subscribe((res:any)=>{
  this.dialogref.close(res)
})
}   

  }

