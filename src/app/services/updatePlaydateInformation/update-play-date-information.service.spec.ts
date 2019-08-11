import { TestBed } from '@angular/core/testing';

import { UpdatePlayDateInformationService } from './update-play-date-information.service';

describe('UpdatePlayDateInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatePlayDateInformationService = TestBed.get(UpdatePlayDateInformationService);
    expect(service).toBeTruthy();
  });
});
