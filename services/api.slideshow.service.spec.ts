
/*
============================================
; Title: api.single.service.spec.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Style Sheet.
;===========================================
*/

import { TestBed } from '@angular/core/testing';

import { ApiSlideshowService } from './api.slideshow.service';

describe('ApiSingleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSlideshowService = TestBed.get(ApiSlideshowService);
    expect(service).toBeTruthy();
  });
});
