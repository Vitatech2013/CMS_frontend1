import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';
import { SEditFeeComponent } from '../s-edit-fee/s-edit-fee.component';

@Component({
  selector: 'app-s-view-fee',
  templateUrl: './s-view-fee.component.html',
  styleUrls: ['./s-view-fee.component.scss']
})
export class SViewFeeComponent implements OnInit {
  Totalfee: any;
  collegeFee: any;
  Studentfee: any;
  searchvalue: any;
  SearchValue:any;
  stotalFee: any;

  constructor(private Api:SuperadminService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Api.STotalFee().subscribe((res:any)=>{
      this.stotalFee = res;
    })
    this.Api.viewFee().subscribe((res:any)=>{
      this.collegeFee = res;  
    })
    this.Api.StudentTotalfee().subscribe((res:any)=>{
      this.Totalfee = res;
    })
    
  }
  searchstdfeedata(){
    this.Api.searchStdtotalFee(this.SearchValue).subscribe((res:any)=>{
      this.stotalFee = res;
    })
  }
  searchdata(){
    this.Api.Searchtotalstudfee(this.searchvalue).subscribe((res:any)=>{
      this.Totalfee = res;
    })
  }
  edit(e:any){
    this.dialog.open(SEditFeeComponent,{
      width:"58%",
      height:"95%",
      data:e
    })
  }

}
