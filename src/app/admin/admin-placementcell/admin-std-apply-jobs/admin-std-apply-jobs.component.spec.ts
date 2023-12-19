import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStdApplyJobsComponent } from './admin-std-apply-jobs.component';

describe('AdminStdApplyJobsComponent', () => {
  let component: AdminStdApplyJobsComponent;
  let fixture: ComponentFixture<AdminStdApplyJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStdApplyJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStdApplyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
