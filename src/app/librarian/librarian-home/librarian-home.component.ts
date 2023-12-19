import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LibrarianEditprofileComponent } from '../librarian-editprofile/librarian-editprofile.component';
import { LibrarianService } from 'src/app/shared/service/librarian.service';
import { log } from 'console';

@Component({
  selector: 'app-librarian-home',
  templateUrl: './librarian-home.component.html',
  styleUrls: ['./librarian-home.component.scss']
})
export class LibrarianHomeComponent implements OnInit {

  constructor(private dialog:MatDialog , private librarianService:LibrarianService) { }
  profile:any;
  ngOnInit(): void {
    this.GetProfile();
    
  }

  GetProfile(){
    let name = JSON.parse(localStorage.getItem('librarian')!).empid
    this.librarianService.GetProfile(name).subscribe((res)=>{
      this.profile = res;
    })
  }
  editProfile(e:any){
    this.dialog.open(LibrarianEditprofileComponent,{
      width:'60%',
      data:e
    })
  }
}
