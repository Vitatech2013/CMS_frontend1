import { TestBed } from '@angular/core/testing';

import { OfficerLoginGuard } from './officer-login.guard';

describe('OfficerLoginGuard', () => {
  let guard: OfficerLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OfficerLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
