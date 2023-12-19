import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEditmarksComponent } from './faculty-editmarks.component';

describe('FacultyEditmarksComponent', () => {
  let component: FacultyEditmarksComponent;
  let fixture: ComponentFixture<FacultyEditmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyEditmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyEditmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
