import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerStudentFeeStatusComponent } from './officer-student-fee-status.component';

describe('OfficerStudentFeeStatusComponent', () => {
  let component: OfficerStudentFeeStatusComponent;
  let fixture: ComponentFixture<OfficerStudentFeeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerStudentFeeStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerStudentFeeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
