import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOfficerComponent } from './delete-officer.component';

describe('DeleteOfficerComponent', () => {
  let component: DeleteOfficerComponent;
  let fixture: ComponentFixture<DeleteOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
