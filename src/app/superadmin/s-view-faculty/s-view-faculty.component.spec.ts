import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewFacultyComponent } from './s-view-faculty.component';

describe('SViewFacultyComponent', () => {
  let component: SViewFacultyComponent;
  let fixture: ComponentFixture<SViewFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SViewFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SViewFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
