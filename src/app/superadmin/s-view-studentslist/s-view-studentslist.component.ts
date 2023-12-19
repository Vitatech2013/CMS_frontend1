import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';
import { SViewStdDetailsComponent } from './s-view-std-details/s-view-std-details.component';
import { SStdAllotmentorderComponent } from './s-std-allotmentorder/s-std-allotmentorder.component';

@Component({
  selector: 'app-s-view-studentslist',
  templateUrl: './s-view-studentslist.component.html',
  styleUrls: ['./s-view-studentslist.component.scss']
})
export class SViewStudentslistComponent implements OnInit {
  EEEStudentsdata: any;
  ECEStudentsdata:any;
  CSEStudentsdata:any;
  MECHStudentsdata:any;
  SearchMECHValue:any
  SearchCSEValue:any
  SearchECEValue:any
  SearchEEEValue:any

  constructor(private Api:SuperadminService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.forEEEstd()
  }
  forEEEstd(){
    this.Api.getStudents("EEE").subscribe((res:any)=>{
      this.EEEStudentsdata = res      
    })
  }
  forECEstd(){
    this.Api.getStudents("ECE").subscribe((res:any)=>{
      this.ECEStudentsdata = res      
    })
  }
  forCSEstd(){
    this.Api.getStudents("CSE").subscribe((res:any)=>{
      this.CSEStudentsdata = res      
    })
  }
  forMECHstd(){
    this.Api.getStudents("MECH").subscribe((res:any)=>{
      this.MECHStudentsdata = res      
    })
  }
  
  searchEEEdata(){
    this.Api.SearchStudents(this.SearchEEEValue).subscribe((res:any)=>{
      this.EEEStudentsdata = res     
    if(this.EEEStudentsdata.length>0){

    }else{
      alert("Their is no such Data Here")
      window.location.reload()
    }     
    })
  }
  searchECEdata(){
    this.Api.SearchStudents(this.SearchECEValue).subscribe((res:any)=>{
      this.ECEStudentsdata = res     
      if(this.ECEStudentsdata.length>0){

      }else{
        alert("Their is no such Data Here")
        window.location.reload()
      } 
    })
  }
  searchCSEdata(){
    this.Api.SearchStudents(this.SearchCSEValue).subscribe((res:any)=>{
      this.CSEStudentsdata = res  
      if(this.CSEStudentsdata.length>0){

      }else{
        alert("Their is no such Data Here")
        window.location.reload()
      }    
    })
  }
  searchMECHdata(){
    this.Api.SearchStudents(this.SearchMECHValue).subscribe((res:any)=>{
      this.MECHStudentsdata = res  
      if(this.MECHStudentsdata.length>0){

      }else{
        alert("Their is no such Data Here")
        window.location.reload()
      }   
    })
  }
  open(s:any){
    this.dialog.open(SViewStdDetailsComponent,{
      width:"50%",
      height:"75%",
      data:s
    })
  }
  download(d:any){
    alert("Are you able to Download this file")
    this.dialog.open(SStdAllotmentorderComponent,{
      width:"50%",
      height:"70%",
      data:d
    })
  }
}
