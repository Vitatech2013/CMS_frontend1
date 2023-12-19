import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewOfficerComponent } from './s-view-officer.component';

describe('SViewOfficerComponent', () => {
  let component: SViewOfficerComponent;
  let fixture: ComponentFixture<SViewOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SViewOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SViewOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
