import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SStdAllotmentorderComponent } from './s-std-allotmentorder.component';

describe('SStdAllotmentorderComponent', () => {
  let component: SStdAllotmentorderComponent;
  let fixture: ComponentFixture<SStdAllotmentorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SStdAllotmentorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SStdAllotmentorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
