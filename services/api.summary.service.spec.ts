/*
============================================
; Title: api.summary.service.spec.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Service.
;===========================================
*/

import { TestBed } from '@angular/core/testing';

import { ApiSummaryService } from './api.summary.service';

describe('ApiSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSummaryService = TestBed.get(ApiSummaryService);
    expect(service).toBeTruthy();
  });
});
