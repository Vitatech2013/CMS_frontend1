import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianViewbooksComponent } from './librarian-viewbooks.component';

describe('LibrarianViewbooksComponent', () => {
  let component: LibrarianViewbooksComponent;
  let fixture: ComponentFixture<LibrarianViewbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianViewbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianViewbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
