import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewStdDetailsComponent } from './s-view-std-details.component';

describe('SViewStdDetailsComponent', () => {
  let component: SViewStdDetailsComponent;
  let fixture: ComponentFixture<SViewStdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SViewStdDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SViewStdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
