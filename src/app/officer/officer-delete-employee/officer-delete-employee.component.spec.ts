import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerDeleteEmployeeComponent } from './officer-delete-employee.component';

describe('OfficerDeleteEmployeeComponent', () => {
  let component: OfficerDeleteEmployeeComponent;
  let fixture: ComponentFixture<OfficerDeleteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerDeleteEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerDeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
