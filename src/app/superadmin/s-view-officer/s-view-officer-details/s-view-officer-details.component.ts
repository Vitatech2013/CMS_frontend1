import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-s-view-officer-details',
  templateUrl: './s-view-officer-details.component.html',
  styleUrls: ['./s-view-officer-details.component.scss']
})
export class SViewOfficerDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
