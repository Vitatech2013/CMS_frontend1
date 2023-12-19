import { AdminService } from 'src/app/shared/service/admin.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminFeeViewComponent } from './admin-fee-view/admin-fee-view.component';

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrls: ['./fee-details.component.scss']
})
export class FeeDetailsComponent implements OnInit {
  SearchValue:any
  Totalfee: any;
  collegeFee: any;
  Studentfee: any;
  searchvalue: any;


  constructor(private Api:AdminService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Api.ShowFee().subscribe((res:any)=>{
      this.collegeFee = res;  
    })
    this.Api.StudentTotalfee().subscribe((res:any)=>{
      this.Totalfee = res;
    })
    this.Api.StudentFee().subscribe((res:any)=>{
      this.Studentfee = res;
    })
  }

  edit(e:any){
    this.dialog.open(AdminFeeViewComponent,{
      width:"55%",
      height:"76%",
      data:e
    })
  }

  searchstdfeedata(){
    let FilteredValue = this.SearchValue
    console.log(FilteredValue);
    
    if(this.SearchValue==undefined || this.SearchValue==''){
      this.Api.StudentTotalfee().subscribe((res:any)=>{
        this.Totalfee = res;
      })
    }else{
      console.log("else block");
      this.Api.Searchtotalstudfee(FilteredValue).subscribe((res:any)=>{
        this.Totalfee = res;      
      })
      
    }
    

  }
  searchdata(){
    let Filterdata = this.searchvalue

    this.Api.SearchStudentsFee(Filterdata).subscribe((res:any)=>{
      this.Studentfee = res;      
    })

  }

}
