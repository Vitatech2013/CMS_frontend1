import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsPageComponent } from './logins-page.component';

describe('LoginsPageComponent', () => {
  let component: LoginsPageComponent;
  let fixture: ComponentFixture<LoginsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
