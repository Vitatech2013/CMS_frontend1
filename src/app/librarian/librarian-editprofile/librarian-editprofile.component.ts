import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibrarianService } from 'src/app/shared/service/librarian.service';

@Component({
  selector: 'app-librarian-editprofile',
  templateUrl: './librarian-editprofile.component.html',
  styleUrls: ['./librarian-editprofile.component.scss']
})
export class LibrarianEditprofileComponent implements OnInit {
  editprofileform!:FormGroup;
  photourl: any;
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA)public data:any,private librarianService:LibrarianService) { }

  ngOnInit(): void {
      this.editprofileform = this.fb.group({
        empid : new FormControl('',[Validators.required]),
        name : new FormControl('',[Validators.required]),
        gender : new FormControl('',[Validators.required]),
        dob : new FormControl('',[Validators.required]),
        mobileno : new FormControl('',[Validators.required]),
        emailid : new FormControl('',[Validators.required]),
        qualification : new FormControl('',[Validators.required]),
        address : new FormControl('',[Validators.required]),
        city : new FormControl('',[Validators.required]),
        state : new FormControl('',[Validators.required]),
        pincode : new FormControl('',[Validators.required]),
        photo : new FormControl
      });
      this.editprofileform.patchValue({
        empid : this.data.empid,
        name : this.data.name,
        gender : this.data.gender,
        dob : this.data.dob,
        mobileno : this.data.mobileno,
        emailid : this.data.emailid,
        qualification : this.data.qualification,
        address : this.data.address,
        city : this.data.city,
        state : this.data.state,
        pincode : this.data.pincode,
        photo : this.data.photo
      })
  }
  editprofile(){
    let id = this.data._id;
    const c ={
      empid : this.editprofileform.get('empid')?.value,
      name : this.editprofileform.get('name')?.value,
      gender : this.editprofileform.get('gender')?.value,
      dob : this.editprofileform.get('dob')?.value,
      mobileno : this.editprofileform.get('mobileno')?.value,
      emailid : this.editprofileform.get('emailid')?.value,
      qualification : this.editprofileform.get('qualification')?.value,
      address : this.editprofileform.get('address')?.value,
      city : this.editprofileform.get('city')?.value,
      state : this.editprofileform.get('state')?.value,
      pincode : this.editprofileform.get('pincode')?.value,
      photo : this.photourl,
    }
    if(this.editprofileform.valid){

      this.librarianService.EditProfile(id,c).subscribe((res)=>{
        alert("Changes Saved");
        window.location.reload();
      })
    }else{
      alert("Something Went Wrong");
    }
  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.photourl = event.target?.result;
      };
    }
  }
}
