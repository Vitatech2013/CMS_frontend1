import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementLoginComponent } from './placement-login.component';

describe('PlacementLoginComponent', () => {
  let component: PlacementLoginComponent;
  let fixture: ComponentFixture<PlacementLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
