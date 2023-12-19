import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEditprofileComponent } from './faculty-editprofile.component';

describe('FacultyEditprofileComponent', () => {
  let component: FacultyEditprofileComponent;
  let fixture: ComponentFixture<FacultyEditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyEditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
