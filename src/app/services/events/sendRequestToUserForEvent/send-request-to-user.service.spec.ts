import { TestBed } from '@angular/core/testing';

import { SendRequestToUserService } from './send-request-to-user.service';

describe('SendRequestToUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendRequestToUserService = TestBed.get(SendRequestToUserService);
    expect(service).toBeTruthy();
  });
});
