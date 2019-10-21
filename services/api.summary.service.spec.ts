import { TestBed } from '@angular/core/testing';

import { ApiSummaryService } from './api.summary.service';

describe('ApiSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSummaryService = TestBed.get(ApiSummaryService);
    expect(service).toBeTruthy();
  });
});
