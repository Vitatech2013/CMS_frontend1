import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerViewStudentDetailsComponent } from './officer-view-student-details.component';

describe('OfficerViewStudentDetailsComponent', () => {
  let component: OfficerViewStudentDetailsComponent;
  let fixture: ComponentFixture<OfficerViewStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerViewStudentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerViewStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
