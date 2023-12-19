import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerViewStudentsComponent } from './officer-view-students.component';

describe('OfficerViewStudentsComponent', () => {
  let component: OfficerViewStudentsComponent;
  let fixture: ComponentFixture<OfficerViewStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerViewStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerViewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
