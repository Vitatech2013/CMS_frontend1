import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewBooksComponent } from './s-view-books.component';

describe('SViewBooksComponent', () => {
  let component: SViewBooksComponent;
  let fixture: ComponentFixture<SViewBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SViewBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
