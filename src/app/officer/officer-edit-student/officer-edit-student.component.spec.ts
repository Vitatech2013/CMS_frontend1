import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerEditStudentComponent } from './officer-edit-student.component';

describe('OfficerEditStudentComponent', () => {
  let component: OfficerEditStudentComponent;
  let fixture: ComponentFixture<OfficerEditStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerEditStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerEditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
