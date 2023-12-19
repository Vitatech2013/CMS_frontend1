import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-view-librarian',
  templateUrl: './admin-view-librarian.component.html',
  styleUrls: ['./admin-view-librarian.component.scss']
})
export class AdminViewLibrarianComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
