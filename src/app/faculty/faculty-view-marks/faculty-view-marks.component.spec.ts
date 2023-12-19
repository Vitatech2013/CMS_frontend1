import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyViewMarksComponent } from './faculty-view-marks.component';

describe('FacultyViewMarksComponent', () => {
  let component: FacultyViewMarksComponent;
  let fixture: ComponentFixture<FacultyViewMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyViewMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyViewMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
