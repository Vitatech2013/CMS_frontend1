import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OfficerService } from 'src/app/shared/service/officer.service';
import { OfficerAddStudentFeeComponent } from '../officer-add-student-fee/officer-add-student-fee.component';

@Component({
  selector: 'app-officer-student-fee-status',
  templateUrl: './officer-student-fee-status.component.html',
  styleUrls: ['./officer-student-fee-status.component.scss'],
})
export class OfficerStudentFeeStatusComponent implements OnInit {
  fees:any[]=[];
  SearchValue: any;

  constructor(private officerApi: OfficerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.officerApi.viewStudentFees().subscribe((res: any) => {
      this.fees = res;
      console.log(this.fees);
    });
  }

  edit(d: any) {
    this.dialog.open(OfficerAddStudentFeeComponent, {
      width: '80%',
      height: '90%',
      data: d,
    });
  }

  searchFee() {
    let studentFee = this.SearchValue;
    this.officerApi.searchStudentFee(studentFee).subscribe((res: any) => {
      this.fees = [res] ;
      console.log(this.fees);
      
    });
  }
}
