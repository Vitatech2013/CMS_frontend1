import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementChangeStatusComponent } from './placement-change-status.component';

describe('PlacementChangeStatusComponent', () => {
  let component: PlacementChangeStatusComponent;
  let fixture: ComponentFixture<PlacementChangeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementChangeStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementChangeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
