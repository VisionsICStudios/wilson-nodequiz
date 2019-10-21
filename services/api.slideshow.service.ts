/*
============================================
; Title: api.slideshow.service.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Service.
;===========================================
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiSlideshowService {
  private slideId;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    ) {}

  get() {
    this.route.paramMap.subscribe(params => {
      this.slideId = params.get('id');
    });

    const apiSlideshowURL = `http://localhost:3000/api/slideshows/${this.slideId}`;
    return this.http.get(apiSlideshowURL);
  }
}
