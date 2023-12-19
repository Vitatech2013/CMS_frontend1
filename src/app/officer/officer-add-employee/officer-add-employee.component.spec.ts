import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerAddEmployeeComponent } from './officer-add-employee.component';

describe('OfficerAddEmployeeComponent', () => {
  let component: OfficerAddEmployeeComponent;
  let fixture: ComponentFixture<OfficerAddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerAddEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerAddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
