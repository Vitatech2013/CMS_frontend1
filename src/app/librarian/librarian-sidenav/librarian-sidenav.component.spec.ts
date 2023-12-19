import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianSidenavComponent } from './librarian-sidenav.component';

describe('LibrarianSidenavComponent', () => {
  let component: LibrarianSidenavComponent;
  let fixture: ComponentFixture<LibrarianSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
