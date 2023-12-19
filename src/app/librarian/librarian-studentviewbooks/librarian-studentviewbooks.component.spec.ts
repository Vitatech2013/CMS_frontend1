import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianStudentviewbooksComponent } from './librarian-studentviewbooks.component';

describe('LibrarianStudentviewbooksComponent', () => {
  let component: LibrarianStudentviewbooksComponent;
  let fixture: ComponentFixture<LibrarianStudentviewbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianStudentviewbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianStudentviewbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
