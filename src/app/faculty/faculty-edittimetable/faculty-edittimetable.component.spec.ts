import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEdittimetableComponent } from './faculty-edittimetable.component';

describe('FacultyEdittimetableComponent', () => {
  let component: FacultyEdittimetableComponent;
  let fixture: ComponentFixture<FacultyEdittimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyEdittimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyEdittimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
