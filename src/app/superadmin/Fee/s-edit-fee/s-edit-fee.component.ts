import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';

@Component({
  selector: 'app-s-edit-fee',
  templateUrl: './s-edit-fee.component.html',
  styleUrls: ['./s-edit-fee.component.scss']
})
export class SEditFeeComponent implements OnInit {
user:any
  collegeFee: any;

  constructor(private Api:SuperadminService,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<SEditFeeComponent>) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('superadmin')!).username
  }
  clearFee(e:any){
    if(e=="admissionfee"){
      let Data = {
        admissionfeestatus:'paid',
        clearedby:this.user
      }  
     this.Api.updateStdFee(this.data._id,Data).subscribe((res:any)=>{
      window.location.reload();
     }) 
    }else if(e=="busfee"){
      let Data = {
        busfeestatus:'paid',
        clearedby:this.user
      }
     this.Api.updateStdFee(this.data._id,Data).subscribe((res:any)=>{
      window.location.reload();
     }) 
    }else if(e=="jntufee"){
      let Data = {
        jntufeestatus:'paid',
        clearedby:this.user
      }
     this.Api.updateStdFee(this.data._id,Data).subscribe((res:any)=>{
      window.location.reload();
     }) 
    }else if(e=='hostelfee'){
      let Data = {
        hostelfeestatus:'paid',
        clearedby:this.user
      }
     this.Api.updateStdFee(this.data._id,Data).subscribe((res:any)=>{
      window.location.reload();
     }) 
    }else if(e=='libraryfee'){
      let Data = {
        libraryfeestatus:'paid',
        clearedby:this.user
      }
     this.Api.updateStdFee(this.data._id,Data).subscribe((res:any)=>{
      window.location.reload();
     }) 
    }else if(e=='collegefee'){
      let Data = {
        collegefeestatus:'paid',
        clearedby:this.user

      }
     this.Api.updateStdFee(this.data._id,Data).subscribe((res:any)=>{
      window.location.reload();
     })
    }
    
  }

}
