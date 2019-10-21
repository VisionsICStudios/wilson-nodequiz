/*
============================================
; Title: login.component.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Component.
;===========================================
*/

/* tslint:disable: max-line-length */
// tslint:disable: no-string-literal

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  template:
    `
      <div class="container">

        <mat-card class="form">

          <mat-card-content>

            <h2>Please sign in</h2>

            <small *ngIf="errorMessage">{{ errorMessage }}</small>

            <form [formGroup]="form" #loginForm="ngForm" (ngSubmit)="onSubmit(form.value); form.reset()">

                <small *ngIf="form.controls['employeeId'].hasError('required') && form.controls['employeeId'].touched">Employee Id is required</small>

                <small *ngIf="form.controls['employeeId'].hasError('pattern') && form.controls['employeeId'].touched">Invalid Employee Id</small>

              <mat-form-field class="inputStyle">

                <input type="text" matInput[formControl]="form.controls['employeeId']" placeholder="Employee Id"/>
              </mat-form-field>

              <mat-card-actions>

                <button mat-raised-button color="primary" [disabled]="!form.valid" color="accent" type="submit">
                  Log in
                </button>
              </mat-card-actions>
            </form>
            <br /><br />
          </mat-card-content>
        </mat-card>
      </div>

    `
  ,
  styles: [
    `
      body {
        background-color: forestgreen
      }

      .container{
        text-align: center;
        margin-top: 100px;
        font-family: Arial, Helvetica, sans-serif;
      }

      .form {
        width: 20%;
        height: 250px;
        margin: 0 auto;
        background-color: white;
        border: 1px solid rgb(104, 119, 104);
        -webkit-box-shadow: 0px 0px 12px 2px rgba(107,117,72,.25);
        -moz-box-shadow: 0px 0px 12px 2px rgba(107,117,72,.25);
        box-shadow: 0px 0px 12px 2px rgba(107,117,72,.25);
      }

      small {
        color: red;
        display: block;
        width: 100%;
        min-width: 100% !important;
        margin-top: 10px;
      }

      .inputStyle {
        margin-top: 50px
      }
    `
  ]
})

export class LoginComponent implements OnInit {
  errorMessage: string;
  employeeLogin: string;
  form: FormGroup;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$')
        ])
      ]
    });
  }

  onSubmit() {
    const apiEmployeeURL = 'http://localhost:3000/api/employee/';

    const employeeId = this.form.controls['employeeId'].value;

    this.http.get(apiEmployeeURL + employeeId).subscribe(res => {
      if (res) {
        this.cookie.set('isAuthenticated', 'true', 1);
        this.cookie.set(employeeId, 'true', 1);
        this.router.navigate(['/quizboard']);
      } else {
        this.errorMessage = 'Invalid Employee ID';
      }
    });
  }
}
