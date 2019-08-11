import { TestBed } from '@angular/core/testing';

import { RequestedPlayDatesService } from './requested-play-dates.service';

describe('RequestedPlayDatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestedPlayDatesService = TestBed.get(RequestedPlayDatesService);
    expect(service).toBeTruthy();
  });
});
