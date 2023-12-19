import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerPlacementComponent } from './officer-placement.component';

describe('OfficerPlacementComponent', () => {
  let component: OfficerPlacementComponent;
  let fixture: ComponentFixture<OfficerPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerPlacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
