import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { log } from 'console';
import { OfficerService } from 'src/app/shared/service/officer.service';
import { OfficerProfileEditComponent } from '../officer-profile-edit/officer-profile-edit.component';

@Component({
  selector: 'app-officer-profile',
  templateUrl: './officer-profile.component.html',
  styleUrls: ['./officer-profile.component.scss'],
})
export class OfficerProfileComponent implements OnInit {
  profileUpdateFrom!: FormGroup;
  officer: any;
  constructor(private officerApi: OfficerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    let eid = JSON.parse(localStorage.getItem('officer')!).empid;
    console.log(eid);
    this.officerApi.getProfile(eid).subscribe((res: any) => {
      this.officer = res;
      console.log(this.officer);
    });
  }

  editProfile(s:any) {
    this.dialog.open(OfficerProfileEditComponent, {
      width: '90%',
      height: '98%',
      data: s,
    });
  }
}
