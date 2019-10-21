/*
============================================
; Title: api.selection.service.spec.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Style Sheet.
;===========================================
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSelectionService {

  constructor(private http: HttpClient) { }

  get() {
    const apiSelectionURL = 'http://localhost:3000/api/selections';
    return this.http.get(apiSelectionURL);
  }
}
