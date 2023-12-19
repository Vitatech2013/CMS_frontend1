import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewFeeComponent } from './s-view-fee.component';

describe('SViewFeeComponent', () => {
  let component: SViewFeeComponent;
  let fixture: ComponentFixture<SViewFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SViewFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SViewFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
