import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerViewEmpComponent } from './officer-view-emp.component';

describe('OfficerViewEmpComponent', () => {
  let component: OfficerViewEmpComponent;
  let fixture: ComponentFixture<OfficerViewEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerViewEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerViewEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
