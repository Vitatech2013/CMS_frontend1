import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerAddStudentFeeComponent } from './officer-add-student-fee.component';

describe('OfficerAddStudentFeeComponent', () => {
  let component: OfficerAddStudentFeeComponent;
  let fixture: ComponentFixture<OfficerAddStudentFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerAddStudentFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerAddStudentFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
