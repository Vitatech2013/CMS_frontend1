import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementJobsComponent } from './placement-jobs.component';

describe('PlacementJobsComponent', () => {
  let component: PlacementJobsComponent;
  let fixture: ComponentFixture<PlacementJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
