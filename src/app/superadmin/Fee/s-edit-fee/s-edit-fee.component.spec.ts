import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEditFeeComponent } from './s-edit-fee.component';

describe('SEditFeeComponent', () => {
  let component: SEditFeeComponent;
  let fixture: ComponentFixture<SEditFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEditFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SEditFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
