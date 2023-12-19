import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianAddbooksComponent } from './librarian-addbooks.component';

describe('LibrarianAddbooksComponent', () => {
  let component: LibrarianAddbooksComponent;
  let fixture: ComponentFixture<LibrarianAddbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianAddbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianAddbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
