import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-s-std-allotmentorder',
  templateUrl: './s-std-allotmentorder.component.html',
  styleUrls: ['./s-std-allotmentorder.component.scss']
})
export class SStdAllotmentorderComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
