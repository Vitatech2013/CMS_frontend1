import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-std-apply-jobs',
  templateUrl: './admin-std-apply-jobs.component.html',
  styleUrls: ['./admin-std-apply-jobs.component.scss']
})
export class AdminStdApplyJobsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef:MatDialogRef<AdminStdApplyJobsComponent>) { }

  ngOnInit(): void {
    console.log(this.data,"check");
    
  }
  close(){
    this.dialogRef.close()
  }

}
