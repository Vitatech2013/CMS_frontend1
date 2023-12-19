import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SViewCompaniesComponent } from './s-view-companies.component';

describe('SViewCompaniesComponent', () => {
  let component: SViewCompaniesComponent;
  let fixture: ComponentFixture<SViewCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SViewCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SViewCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
