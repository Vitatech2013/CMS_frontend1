import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeeViewComponent } from './admin-fee-view.component';

describe('AdminFeeViewComponent', () => {
  let component: AdminFeeViewComponent;
  let fixture: ComponentFixture<AdminFeeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFeeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
