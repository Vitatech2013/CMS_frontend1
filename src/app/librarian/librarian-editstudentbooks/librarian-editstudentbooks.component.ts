import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder, FormGroup , FormControl , Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibrarianService } from 'src/app/shared/service/librarian.service';

@Component({
  selector: 'app-librarian-editstudentbooks',
  templateUrl: './librarian-editstudentbooks.component.html',
  styleUrls: ['./librarian-editstudentbooks.component.scss']
})
export class LibrarianEditstudentbooksComponent implements OnInit {
  editStudentBooksform!:FormGroup;
  constructor(private fb:FormBuilder , @Inject(MAT_DIALOG_DATA)public data:any ,
  private librarianService:LibrarianService
  ) { }

  ngOnInit(): void {
    this.editStudentBooksform = this.fb.group({
      librarian : new FormControl('',[Validators.required]),
      hallticket : new FormControl('',[Validators.required]),
      studentname : new FormControl('',[Validators.required]),
      bookname : new FormControl('',[Validators.required]),
      author : new FormControl('',[Validators.required]),
      branchname : new FormControl('',[Validators.required]),
      price : new FormControl('',[Validators.required]),
      date : new FormControl('',[Validators.required]),
      fine : new FormControl('',[Validators.required]),
      clearedBy : new FormControl('',[Validators.required]),
    });
    this.editStudentBooksform.patchValue({
      librarian : this.data.librarian,
      hallticket : this.data.hallticket,
      studentname : this.data.studentname,
      bookname : this.data.bookname,
      author : this.data.author,
      branchname : this.data.branchname,
      price : this.data.price,
      date : this.data.date,
      fine : this.data.fine,
      clearedBy : this.data.clearedBy,
    })
  }
  updateStudentBook(){
    let id = this.data._id;
    const c ={
      librarian : this.editStudentBooksform.get('librarian')?.value,
      hallticket : this.editStudentBooksform.get('hallticket')?.value,
      studentname : this.editStudentBooksform.get('studentname')?.value,
      bookname : this.editStudentBooksform.get('bookname')?.value,
      author : this.editStudentBooksform.get('author')?.value,
      branchname : this.editStudentBooksform.get('branchname')?.value,
      price : this.editStudentBooksform.get('price')?.value,
      date : this.editStudentBooksform.get('date')?.value,
      fine : this.editStudentBooksform.get('fine')?.value,
      clearedBy : this.editStudentBooksform.get('clearedBy')?.value,
    }
    if(this.editStudentBooksform.valid){
      this.librarianService.EditStudentBooks(id,c).subscribe((res)=>{
        alert("Updated Successfully");
        window.location.reload();
      })
    }else{
      alert("Something Went wrong")
    }
  }
}
