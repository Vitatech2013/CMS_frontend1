import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';

@Component({
  selector: 'app-s-view-books',
  templateUrl: './s-view-books.component.html',
  styleUrls: ['./s-view-books.component.scss']
})
export class SViewBooksComponent implements OnInit {
  TotalBooks: any;
  StdBooks: any;

  constructor(private Api:SuperadminService) { }

  ngOnInit(): void {
    this.Api.viewBooks().subscribe((res:any)=>{
      this.TotalBooks = res;
    })
    this.Api.viewStdBooks().subscribe((res:any)=>{
      this.StdBooks = res;
    })
  }

}
