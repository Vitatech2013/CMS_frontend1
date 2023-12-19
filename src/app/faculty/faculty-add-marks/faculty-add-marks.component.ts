import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-add-marks',
  templateUrl: './faculty-add-marks.component.html',
  styleUrls: ['./faculty-add-marks.component.scss']
})
export class FacultyAddMarksComponent implements OnInit {
  TotalMarks: any
  TotalSecuredMarks: any
  marksStatus: any
  constructor(private fb: FormBuilder, private facultyservice: FacultyService) { }
  AddMarksForm !: FormGroup
  ngOnInit(): void {
    this.AddMarksForm = this.fb.group({
      hallticket: ['', [Validators.required]],
      studentname: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      sem: ['', [Validators.required]],
      subject1: ['', [Validators.required]],
      subject1totalmarks: ['', [Validators.required]],
      subject1marks: ['', [Validators.required]],
      subject2: ['', [Validators.required]],
      subject2totalmarks: ['', [Validators.required]],
      subject2marks: ['', [Validators.required]],
      subject3: ['', [Validators.required]],
      subject3totalmarks: ['', [Validators.required]],
      subject3marks: ['', [Validators.required]],
      totalMarks: ['', [Validators.required]],
      totalscoredmarks: ['', [Validators.required]],
      percentage: ['', [Validators.required]],
      status: ['', [Validators.required]],
    })
  }
  calculateMarks() {
    let s1sm = parseInt(this.AddMarksForm.value.subject1marks)
    let s1m = parseInt(this.AddMarksForm.value.subject1totalmarks)
    let s2sm = parseInt(this.AddMarksForm.value.subject2marks)
    let s2m = parseInt(this.AddMarksForm.value.subject2totalmarks)
    let s3sm = parseInt(this.AddMarksForm.value.subject3marks)
    let s3m = parseInt(this.AddMarksForm.value.subject3totalmarks)
    this.TotalMarks = s1m + s2m + s3m
    this.TotalSecuredMarks = s1sm + s2sm + s3sm
    let Percentage = this.TotalSecuredMarks / this.TotalMarks * 100

    if (Percentage > 35) {
      this.marksStatus = "Pass"
    } else {
      this.marksStatus = "Fail"
    }
    this.AddMarksForm.patchValue({
      totalMarks: this.TotalMarks,
      totalscoredmarks: this.TotalSecuredMarks,
      percentage: Percentage,
      status: this.marksStatus
    })
  }
  AddMarks() {
    if (this.AddMarksForm.valid) {
      this.facultyservice.AddMarks(this.AddMarksForm.value).subscribe((res: any) => {
        alert('added succesful')
        window.location.reload()

        console.log(res)
      })
    } else {
      alert('something went wrong')
    }

  }
}
