import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianAddstudentbooksComponent } from './librarian-addstudentbooks.component';

describe('LibrarianAddstudentbooksComponent', () => {
  let component: LibrarianAddstudentbooksComponent;
  let fixture: ComponentFixture<LibrarianAddstudentbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianAddstudentbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianAddstudentbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
