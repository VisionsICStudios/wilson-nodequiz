import { TestBed } from '@angular/core/testing';

import { ApiMultiService } from './api.multi.service';

describe('ApiMultiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMultiService = TestBed.get(ApiMultiService);
    expect(service).toBeTruthy();
  });
});
