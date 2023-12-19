import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianSearchstudentbookComponent } from './librarian-searchstudentbook.component';

describe('LibrarianSearchstudentbookComponent', () => {
  let component: LibrarianSearchstudentbookComponent;
  let fixture: ComponentFixture<LibrarianSearchstudentbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianSearchstudentbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianSearchstudentbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
