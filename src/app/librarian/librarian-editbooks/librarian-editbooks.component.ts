import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material/dialog';
import { LibrarianService } from 'src/app/shared/service/librarian.service';

@Component({
  selector: 'app-librarian-editbooks',
  templateUrl: './librarian-editbooks.component.html',
  styleUrls: ['./librarian-editbooks.component.scss']
})
export class LibrarianEditbooksComponent implements OnInit {

editbookform!:FormGroup  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,private fb:FormBuilder,
    private librarianService:LibrarianService,private matdialogueref : MatDialogRef<LibrarianEditbooksComponent>
  ) { }

  ngOnInit(): void {
    this.editbookform = this.fb.group({
      bookname : new FormControl('',[Validators.required]),
      author : new FormControl('',[Validators.required]),
      department : new FormControl('',[Validators.required]),
      price : new FormControl('',[Validators.required]),
      quantity : new FormControl('',[Validators.required]),
    });
    this.editbookform.patchValue({
      bookname : this.data.bookname,
      author : this.data.author,
      department : this.data.department,
      price : this.data.price,
      quantity : this.data.quantity,
    })
  }
  updateBooks(){
    const c = {
      bookname : this.editbookform.get('bookname')?.value,
      author : this.editbookform.get('author')?.value,
      department : this.editbookform.get('department')?.value,
      price : this.editbookform.get('price')?.value,
      quantity : this.editbookform.get('quantity')?.value,
    }
    if(this.editbookform.valid){
      this.librarianService.EditBooks(this.data._id,c).subscribe((res)=>{
        alert("Updated Successfully");
        window.location.reload();
      })
    }else{
      alert("Something Went wrong")
    }
  }
}
