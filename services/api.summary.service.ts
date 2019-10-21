/*
============================================
; Title: api.summary.service.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Service.
;===========================================
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSummaryService {

  constructor(private http: HttpClient) { }

  get() {
    const apiSummaryURL = `http://localhost:3000/api/summary`;
    return this.http.get(apiSummaryURL);
  }
}
