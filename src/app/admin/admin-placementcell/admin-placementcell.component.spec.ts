import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlacementcellComponent } from './admin-placementcell.component';

describe('AdminPlacementcellComponent', () => {
  let component: AdminPlacementcellComponent;
  let fixture: ComponentFixture<AdminPlacementcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlacementcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlacementcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
