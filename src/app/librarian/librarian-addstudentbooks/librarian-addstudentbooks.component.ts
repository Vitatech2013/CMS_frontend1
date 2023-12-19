import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrarianService } from 'src/app/shared/service/librarian.service';

@Component({
  selector: 'app-librarian-addstudentbooks',
  templateUrl: './librarian-addstudentbooks.component.html',
  styleUrls: ['./librarian-addstudentbooks.component.scss']
})
export class LibrarianAddstudentbooksComponent implements OnInit {

  addStudentform!:FormGroup;

  constructor(private fb:FormBuilder , private librarianService:LibrarianService , private router:Router) { }

  ngOnInit(): void {
    this.addStudentform = this.fb.group({
      librarian : JSON.parse(localStorage.getItem('librarian')!).name,
      hallticket : new FormControl('',[Validators.required]),
      studentname : new FormControl('',[Validators.required]),
      bookname : new FormControl('',[Validators.required]),
      author : new FormControl('',[Validators.required]),
      branchname : new FormControl('',[Validators.required]),
      price : new FormControl('',[Validators.required]),
      date : new FormControl('',[Validators.required]),
      fine : new FormControl('',[Validators.required]),
      clearedBy : JSON.parse(localStorage.getItem('librarian')!).name,
    });
  }
  
  addStudentbook(){
    let data = this.addStudentform.value;
    if(this.addStudentform.valid){
      this.librarianService.PostStudentBooks(data).subscribe((res)=>{
        alert("Student-Book Added");
        this.router.navigate(['/librarian-dashboard/librarian-viewstudentbooks']);
      })
    }else{
      alert("Something Went Wrong")
    }
  }
}
