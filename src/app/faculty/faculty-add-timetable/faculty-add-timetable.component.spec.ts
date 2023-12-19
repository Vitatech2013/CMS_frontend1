import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAddTimetableComponent } from './faculty-add-timetable.component';

describe('FacultyAddTimetableComponent', () => {
  let component: FacultyAddTimetableComponent;
  let fixture: ComponentFixture<FacultyAddTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAddTimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAddTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
