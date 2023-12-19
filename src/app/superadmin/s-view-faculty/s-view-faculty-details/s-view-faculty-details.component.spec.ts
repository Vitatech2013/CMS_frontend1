import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewFacultyDetailsComponent } from './s-view-faculty-details.component';

describe('SViewFacultyDetailsComponent', () => {
  let component: SViewFacultyDetailsComponent;
  let fixture: ComponentFixture<SViewFacultyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SViewFacultyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SViewFacultyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
