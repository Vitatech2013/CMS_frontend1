import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { log } from 'console';
import { OfficerService } from 'src/app/shared/service/officer.service';
import { OfficerEditEmployeeComponent } from '../officer-edit-employee/officer-edit-employee.component';
import { OfficerDeleteEmployeeComponent } from '../officer-delete-employee/officer-delete-employee.component';

@Component({
  selector: 'app-officer-view-emp',
  templateUrl: './officer-view-emp.component.html',
  styleUrls: ['./officer-view-emp.component.scss'],
})
export class OfficerViewEmpComponent implements OnInit {
  employees: any;
  SearchValue: any;
  searchvalue: any;
  officerId: any;
  constructor(private officerApi: OfficerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.officerId=JSON.parse(localStorage.getItem('officer')!).empid
    this.officerApi.viewEmployees().subscribe((res: any) => {
      this.employees = res.filter((x:any)=>x.empid!=this.officerId);
      console.log(res, 'f');
    });
  }
  editEmp(e: any) {
    this.dialog.open(OfficerEditEmployeeComponent, {
      width: '90%',
      height: '91%',
      data: e,
    });
  }

  deleteEmp(e: any) {
    this.dialog.open(OfficerDeleteEmployeeComponent, {
      width: '60%',
      height: '50%',
      data: e,
    });
  }

  searchEmp() {
    let emp = this.SearchValue;
    console.log(emp);
    
    if (emp == '' || undefined) {
      this.officerApi.viewEmployees().subscribe((res: any) => {
        this.employees = res;
      });
    } else {
      console.log('else block');
      this.officerApi.searchEmps(emp).subscribe((res: any) => {
        this.employees = res;
      });
    }
  }
}
