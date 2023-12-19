import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewLibrarianComponent } from './admin-view-librarian.component';

describe('AdminViewLibrarianComponent', () => {
  let component: AdminViewLibrarianComponent;
  let fixture: ComponentFixture<AdminViewLibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewLibrarianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
