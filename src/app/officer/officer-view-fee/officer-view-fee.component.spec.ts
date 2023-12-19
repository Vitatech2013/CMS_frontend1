import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerViewFeeComponent } from './officer-view-fee.component';

describe('OfficerViewFeeComponent', () => {
  let component: OfficerViewFeeComponent;
  let fixture: ComponentFixture<OfficerViewFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerViewFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerViewFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
