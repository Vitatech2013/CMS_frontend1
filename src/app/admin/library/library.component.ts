import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/shared/service/admin.service';
import { AdminViewLibrarianComponent } from './admin-view-librarian/admin-view-librarian.component';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  Libraryfaculty: any;
  TotalBooks:any;
  StdBooks:any;

  constructor(private Api:AdminService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Api.ShowFaculty("Librarian").subscribe((res:any)=>{
      this.Libraryfaculty = res;
      console.log(res,"librarian");
      
    })
    this.Api.TotalBooks().subscribe((res:any)=>{
      this.TotalBooks = res;
    })
    this.Api.StdBooks().subscribe((res:any)=>{
      this.StdBooks = res;
    })
  }
  viewBankDetails(L:any){
    this.dialog.open(AdminViewLibrarianComponent,{
      width:"65%",
      height:"60%",
      data:L
    })

  }

}
