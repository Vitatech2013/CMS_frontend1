import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LibrarianEditstudentbooksComponent } from '../librarian-editstudentbooks/librarian-editstudentbooks.component';
import { LibrarianService } from 'src/app/shared/service/librarian.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-librarian-studentviewbooks',
  templateUrl: './librarian-studentviewbooks.component.html',
  styleUrls: ['./librarian-studentviewbooks.component.scss']
})
export class LibrarianStudentviewbooksComponent implements OnInit {
  searchStudents:any;
  StudentForm!:FormGroup;
  studentBooks: any=[];
  constructor(private dialog:MatDialog , private fb:FormBuilder,
     private librarianService:LibrarianService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.StudentForm=this.fb.group({
      hallticket:['',[Validators.required]]
    });
    this.getStudentBooks();
  }

  getStudentBooks(){
    this.librarianService.GetStudentBooks().subscribe((res)=>{
      this.studentBooks = res;
    })
  }

  editstudentbooks(e:any){
    this.dialog.open(LibrarianEditstudentbooksComponent,{
      width:'60%',
      height:'80%',
      data:e
    })
  }
  deleteStudentbooks(BK:any){ 
    this.librarianService.DeleteStudentBooks(BK._id).subscribe((res)=>{
      alert("Deleted Successfully");
      window.location.reload();
    })
  }
  search(){
    if(this.StudentForm.valid){
    this.librarianService.SearchStudentBooks(this.StudentForm.value.hallticket).subscribe((res:any)=>{
      this.searchStudents=res;
      console.log(this.searchStudents);
      
    })
  }else{
    alert('please enter hallticket number')
  }
  }
}
