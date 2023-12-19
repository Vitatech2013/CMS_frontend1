import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.scss'],
})
export class OfficerLoginComponent implements OnInit {
  officerloginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private officerService: OfficerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.officerloginForm = this.fb.group({
      empid: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
    });
  }
  officerLogin() {
    let emp = this.officerloginForm.value.empid;
    let mobile = this.officerloginForm.value.mobileno;
    let toe = 'officer';
    console.log(emp, mobile, toe);

    if (this.officerloginForm.valid) {
      this.officerService
        .officerLogin(emp, mobile, toe)
        .subscribe((res: any) => {
          if (res) {
            localStorage.setItem('officer', JSON.stringify(res));
            this.router.navigate(['/officer-dashboard']);
          } else {
            alert('login failed');
          }
        });
    } else {
      alert('please fill required');
    }
  }
}
