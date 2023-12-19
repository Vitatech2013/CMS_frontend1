import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent implements OnInit {
  viewbooks:any
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {

    let stuViewbooks= JSON.parse(localStorage.getItem('student')!).hallticket

    this.studentservice.viewBooks(stuViewbooks).subscribe((res:any)=>{
      this.viewbooks = res
      console.log(res);
      
    })
  }

}
