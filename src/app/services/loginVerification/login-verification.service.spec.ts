import { TestBed } from '@angular/core/testing';

import { LoginVerificationService } from './login-verification.service';

describe('LoginVerificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginVerificationService = TestBed.get(LoginVerificationService);
    expect(service).toBeTruthy();
  });
});
