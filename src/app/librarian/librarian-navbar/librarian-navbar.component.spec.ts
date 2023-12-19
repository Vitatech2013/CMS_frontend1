import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianNavbarComponent } from './librarian-navbar.component';

describe('LibrarianNavbarComponent', () => {
  let component: LibrarianNavbarComponent;
  let fixture: ComponentFixture<LibrarianNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
