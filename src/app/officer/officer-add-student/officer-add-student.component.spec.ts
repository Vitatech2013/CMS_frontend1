import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerAddStudentComponent } from './officer-add-student.component';

describe('OfficerAddStudentComponent', () => {
  let component: OfficerAddStudentComponent;
  let fixture: ComponentFixture<OfficerAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerAddStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
