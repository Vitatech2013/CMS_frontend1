import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianEditstudentbooksComponent } from './librarian-editstudentbooks.component';

describe('LibrarianEditstudentbooksComponent', () => {
  let component: LibrarianEditstudentbooksComponent;
  let fixture: ComponentFixture<LibrarianEditstudentbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianEditstudentbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianEditstudentbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
