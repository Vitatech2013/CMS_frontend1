import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianEditbooksComponent } from './librarian-editbooks.component';

describe('LibrarianEditbooksComponent', () => {
  let component: LibrarianEditbooksComponent;
  let fixture: ComponentFixture<LibrarianEditbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianEditbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianEditbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
