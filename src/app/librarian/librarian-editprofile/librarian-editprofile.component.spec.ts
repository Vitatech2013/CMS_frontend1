import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianEditprofileComponent } from './librarian-editprofile.component';

describe('LibrarianEditprofileComponent', () => {
  let component: LibrarianEditprofileComponent;
  let fixture: ComponentFixture<LibrarianEditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianEditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
