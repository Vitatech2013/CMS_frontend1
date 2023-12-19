import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-fee-view',
  templateUrl: './admin-fee-view.component.html',
  styleUrls: ['./admin-fee-view.component.scss']
})
export class AdminFeeViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
