import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewStudentslistComponent } from './s-view-studentslist.component';

describe('SViewStudentslistComponent', () => {
  let component: SViewStudentslistComponent;
  let fixture: ComponentFixture<SViewStudentslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SViewStudentslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SViewStudentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
