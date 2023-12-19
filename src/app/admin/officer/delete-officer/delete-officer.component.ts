import { AdminService } from 'src/app/shared/service/admin.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-officer',
  templateUrl: './delete-officer.component.html',
  styleUrls: ['./delete-officer.component.scss']
})
export class DeleteOfficerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private Api:AdminService) { }

  ngOnInit(): void {
  }
  deleteRecord(){
    this.Api.deleteOfficer(this.data._id).subscribe((res:any)=>{
      window.alert("Are You Sure Want to Delete This Record ?")
      window.location.reload()
    })

  }

}
