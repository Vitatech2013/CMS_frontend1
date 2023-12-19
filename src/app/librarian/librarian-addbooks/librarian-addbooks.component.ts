import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrarianService } from 'src/app/shared/service/librarian.service';

@Component({
  selector: 'app-librarian-addbooks',
  templateUrl: './librarian-addbooks.component.html',
  styleUrls: ['./librarian-addbooks.component.scss']
})
export class LibrarianAddbooksComponent implements OnInit {

  addbookform!:FormGroup

  constructor(private fb:FormBuilder , private librarianService:LibrarianService , private router:Router) { }

  ngOnInit(): void {
    this.addbookform = this.fb.group({
      bookname : new FormControl('',[Validators.required]),
      author : new FormControl('',[Validators.required]),
      department : new FormControl('',[Validators.required]),
      price : new FormControl('',[Validators.required]),
      quantity : new FormControl('',[Validators.required]),
    })
  }

  addBooks(){
    let data = this.addbookform.value;
    if(this.addbookform.valid){
      this.librarianService.PostBooks(data).subscribe((res)=>{
        alert("Book Added Successfully");
        this.router.navigate(['/librarian-dashboard/librarian-viewbooks'])
      })
    }else{
      alert("Something Went Wrong")
    }
  }  

}
