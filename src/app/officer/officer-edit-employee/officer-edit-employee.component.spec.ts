import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerEditEmployeeComponent } from './officer-edit-employee.component';

describe('OfficerEditEmployeeComponent', () => {
  let component: OfficerEditEmployeeComponent;
  let fixture: ComponentFixture<OfficerEditEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerEditEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
