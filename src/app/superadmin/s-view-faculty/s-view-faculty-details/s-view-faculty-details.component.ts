import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-s-view-faculty-details',
  templateUrl: './s-view-faculty-details.component.html',
  styleUrls: ['./s-view-faculty-details.component.scss']
})
export class SViewFacultyDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
