/*
============================================
; Title: not-found.component.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Style Sheet.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template:
    `
      <div class="container">
        <mat-card color="accent" class="form">
          <mat-card-content class="contentGroup">
            <h1>Oops this page doesn't exist.</h1>
            <h3 style="color: red;">Error 404</h3>
            <button (click)="quizboard()" mat-button color="primary">
              Quizboard
            </button>
          </mat-card-content>
        </mat-card>
      </div>
    `
  ,
  styles: [
    `
      .container {
        margin-top: 100px;
        font-family: Helvetica, Arial, sans-serif;
      }

      .form {
        width: 50%;
        height: 250px;
        margin: 0 auto;
        text-align: center;
        background-color: grey;
      }
      .contentGroup {
        padding-top: 25px;
      }
      .contentStyle {
        display: block;
        width: 50%;
        margin: 20px auto;
      }
    `
  ]
})

export class NotFoundComponent implements OnInit {
  constructor(private router: Router, private cookie: CookieService) {}

  ngOnInit() {}

  quizboard() {
    const value: string = this.cookie.get('isAuthenticated');
    if (value) {
      this.router.navigate(['/quizboard']);
    } else {
      this.router.navigate(['/session/login']);
    }
  }
}
