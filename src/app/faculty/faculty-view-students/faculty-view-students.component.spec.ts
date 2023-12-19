import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyViewStudentsComponent } from './faculty-view-students.component';

describe('FacultyViewStudentsComponent', () => {
  let component: FacultyViewStudentsComponent;
  let fixture: ComponentFixture<FacultyViewStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyViewStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyViewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
