import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyViewTimetableComponent } from './faculty-view-timetable.component';

describe('FacultyViewTimetableComponent', () => {
  let component: FacultyViewTimetableComponent;
  let fixture: ComponentFixture<FacultyViewTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyViewTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyViewTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
