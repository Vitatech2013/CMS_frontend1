import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LibrarianEditbooksComponent } from '../librarian-editbooks/librarian-editbooks.component';
import { LibrarianService } from 'src/app/shared/service/librarian.service';

@Component({
  selector: 'app-librarian-viewbooks',
  templateUrl: './librarian-viewbooks.component.html',
  styleUrls: ['./librarian-viewbooks.component.scss']
})
export class LibrarianViewbooksComponent implements OnInit {
  books: any;

  constructor(private dialog:MatDialog , private libraraianService:LibrarianService) { }

  ngOnInit(): void {
      this.getBooks();
  }

getBooks(){
  this.libraraianService.GetBooks().subscribe((res)=>{
    this.books = res;
  })
} 

editbooks(e:any){
  this.dialog.open(LibrarianEditbooksComponent,{
    width:'50%',
    data:e
  })
}
deletebook(B:any){
  this.libraraianService.DeleteBooks(B._id).subscribe((res)=>{
    alert("Book Deleted");
    window.location.reload();
  })
}
}
