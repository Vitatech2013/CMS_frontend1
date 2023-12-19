import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewOfficerDetailsComponent } from './s-view-officer-details.component';

describe('SViewOfficerDetailsComponent', () => {
  let component: SViewOfficerDetailsComponent;
  let fixture: ComponentFixture<SViewOfficerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SViewOfficerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SViewOfficerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
