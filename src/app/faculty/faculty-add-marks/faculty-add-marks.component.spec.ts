import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAddMarksComponent } from './faculty-add-marks.component';

describe('FacultyAddMarksComponent', () => {
  let component: FacultyAddMarksComponent;
  let fixture: ComponentFixture<FacultyAddMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAddMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAddMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
