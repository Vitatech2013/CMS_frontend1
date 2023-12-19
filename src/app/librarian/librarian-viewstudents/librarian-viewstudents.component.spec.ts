import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianViewstudentsComponent } from './librarian-viewstudents.component';

describe('LibrarianViewstudentsComponent', () => {
  let component: LibrarianViewstudentsComponent;
  let fixture: ComponentFixture<LibrarianViewstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianViewstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianViewstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
