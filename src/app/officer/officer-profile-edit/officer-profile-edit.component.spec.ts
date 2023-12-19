import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerProfileEditComponent } from './officer-profile-edit.component';

describe('OfficerProfileEditComponent', () => {
  let component: OfficerProfileEditComponent;
  let fixture: ComponentFixture<OfficerProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
