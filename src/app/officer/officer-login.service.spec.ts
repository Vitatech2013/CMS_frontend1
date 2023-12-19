import { TestBed } from '@angular/core/testing';

import { OfficerLoginService } from './officer-login.service';

describe('OfficerLoginService', () => {
  let service: OfficerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
