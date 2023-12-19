import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerDeleteStudentComponent } from './officer-delete-student.component';

describe('OfficerDeleteStudentComponent', () => {
  let component: OfficerDeleteStudentComponent;
  let fixture: ComponentFixture<OfficerDeleteStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerDeleteStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerDeleteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
