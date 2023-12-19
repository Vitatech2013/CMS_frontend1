import { Component, OnInit } from '@angular/core';
import { LibrarianService } from 'src/app/shared/service/librarian.service';

@Component({
  selector: 'app-librarian-viewstudents',
  templateUrl: './librarian-viewstudents.component.html',
  styleUrls: ['./librarian-viewstudents.component.scss']
})
export class LibrarianViewstudentsComponent implements OnInit {
  students:any;
  constructor(private librarianService:LibrarianService) { }

  ngOnInit(): void {
    this.getStudents();
  }
getStudents(){
  this.librarianService.GetStudents().subscribe((res)=>{
    this.students = res
  })
}
}
