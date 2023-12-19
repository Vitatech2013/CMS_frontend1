import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-view-fee',
  templateUrl: './view-fee.component.html',
  styleUrls: ['./view-fee.component.scss']
})
export class ViewFeeComponent implements OnInit {
  viewfee:any
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {

    let stuFee= JSON.parse(localStorage.getItem('student')!).hallticket

    this.studentservice.viewFee(stuFee).subscribe((res:any)=>{
      this.viewfee = res
   
      
    })
  }

}
