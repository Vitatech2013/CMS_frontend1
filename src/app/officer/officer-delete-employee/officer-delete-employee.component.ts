import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-delete-employee',
  templateUrl: './officer-delete-employee.component.html',
  styleUrls: ['./officer-delete-employee.component.scss']
})
export class OfficerDeleteEmployeeComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private officerApi: OfficerService
    ) { }

  ngOnInit(): void {
  }
  deleteStudent() {
    this.officerApi.deleteEmployee(this.data._id).subscribe((res:any)=>{

    })
    window.location.reload();
  }
}
