import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-s-view-std-details',
  templateUrl: './s-view-std-details.component.html',
  styleUrls: ['./s-view-std-details.component.scss']
})
export class SViewStdDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
