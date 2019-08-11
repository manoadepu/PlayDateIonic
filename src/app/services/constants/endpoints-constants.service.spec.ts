import { TestBed } from '@angular/core/testing';

import { EndpointsConstantsService } from './endpoints-constants.service';

describe('EndpointsConstantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EndpointsConstantsService = TestBed.get(EndpointsConstantsService);
    expect(service).toBeTruthy();
  });
});
