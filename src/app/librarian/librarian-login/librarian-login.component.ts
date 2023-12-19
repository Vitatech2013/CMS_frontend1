import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrarianService } from 'src/app/shared/service/librarian.service';

@Component({
  selector: 'app-librarian-login',
  templateUrl: './librarian-login.component.html',
  styleUrls: ['./librarian-login.component.scss']
})
export class LibrarianLoginComponent implements OnInit {
  librarianloginform!:FormGroup
  constructor(private fb:FormBuilder , private librarianService:LibrarianService , private router:Router) { }

  ngOnInit(): void {
    this.librarianloginform = this.fb.group({
      empid : new FormControl ('',[Validators.required]),
      mobileno : new FormControl ('',[Validators.required]),
    })
  }
  librarianLogin(){
  let empid = this.librarianloginform.get('empid')?.value;
  let mobileno = this.librarianloginform.get('mobileno')?.value;
  let typeofemployee = 'librarian'
    this.librarianService.LibrarianLogin(empid,mobileno,typeofemployee).subscribe((res=>{
      if(res){
        localStorage.setItem('librarian',JSON.stringify(res));
        alert("Librarian Login Success");
        this.router.navigate(['/librarian-dashboard'])
      }else{
        alert("Invalid Credentials")
      }
    }))
  }
}
