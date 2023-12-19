import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerAddFeeComponent } from './officer-add-fee.component';

describe('OfficerAddFeeComponent', () => {
  let component: OfficerAddFeeComponent;
  let fixture: ComponentFixture<OfficerAddFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerAddFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerAddFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
