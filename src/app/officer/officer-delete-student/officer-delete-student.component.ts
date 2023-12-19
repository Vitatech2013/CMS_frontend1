import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-delete-student',
  templateUrl: './officer-delete-student.component.html',
  styleUrls: ['./officer-delete-student.component.scss'],
})
export class OfficerDeleteStudentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private officerApi: OfficerService
  ) {}

  ngOnInit(): void {}

  deleteStudent() {
    this.officerApi.deleteStudents(this.data._id).subscribe((res: any) => {});
    window.location.reload();
  }
}
