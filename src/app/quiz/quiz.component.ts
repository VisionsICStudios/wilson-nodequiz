/*
============================================
; Title:  quiz.component.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Component.
;===========================================
*/

// tslint:disable: max-line-length

import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { ApiMultiService } from '../../../services/api.multi.service';
import { ApiSingleService } from '../../../services/api.single.service';
import { CookieService } from 'ngx-cookie-service';

import { ResultsComponent } from '../shared/results/results.component';

import * as moment from 'moment';

@Component({
  selector: 'app-quiz',
  template:
    `
      <div class="container" *ngIf="quiz">

        <form #quizForm="ngForm" (ngSubmit)="onSubmit(quizForm.value)" validators>

          <div fxLayout="column" fxLayoutAlign="center center">

            <h1 class="primary-text-color">{{quiz.title}}</h1>

            <mat-card style="width: 80%;" *ngFor="let question of quiz.questions; let i=index">

              <mat-card-header>
                <mat-card-title>{{i + 1}}. {{ question.question }}</mat-card-title>
              </mat-card-header>

              <mat-card-content>

                <mat-radio-group fxLayout="column" fxLayoutAlign="start start" fxLayoutGap="10px" name="question{{i}}" ngModel>

                  <mat-radio-button [value]="{'question': question.question, 'answer': answer.answer, 'isCorrect': answer.isCorrect}" style="margin-left: 50px;" *ngFor="let answer of question.answers">
                    {{answer.answer}}
                  </mat-radio-button>
                </mat-radio-group>
              </mat-card-content>

              <button class="back-to-slideshow-btn" color="primary" [routerLink]="['/selections/', quiz.id]" mat-button>Back To Slideshow</button>
            </mat-card>
          </div>

          <div fxLayout="row" fxLayoutAlign="center center">
            <button type="submit" fxFlex=80% class="submit-quiz-btn" mat-raised-button color="primary">Submit Quiz</button>
          </div>
        </form>
      </div>

      <div class="container" *ngIf="quiz">

        <form #quizForm="ngForm" (ngSubmit)="onSubmit(quizForm.value)" validators>

          <div fxLayout="column" fxLayoutAlign="center center">

            <h1 class="primary-text-color">{{quiz.title}}</h1>

            <mat-card style="width: 80%;" *ngFor="let question of quiz.questions; let i=index">

              <mat-card-header>

                <mat-card-title>{{i + 1}}. {{ question.challenge }}</mat-card-title>
              </mat-card-header>

              <mat-card-content>

                <mat-radio-group fxLayout="column" xLayoutAlign="start start" fxLayoutGap="10px" name="question{{i}}" ngModel>

                  <mat-radio-button [value]="{'question': question.question, 'answer': answer.answer, 'isCorrect': answer.isCorrect}" style="margin-left: 50px;" *ngFor="let answer of question.answers">
                    {{answer.answer}}
                  </mat-radio-button>
                </mat-radio-group>
              </mat-card-content>

              <button class="back-to-slideshow-btn" color="primary" [routerLink]="['/selections/', quiz.id]" mat-button>Back To Slideshow</button>
            </mat-card>
          </div>

          <div fxLayout="row" fxLayoutAlign="center center">

            <button type="submit" fxFlex=80% class="submit-quiz-btn" mat-raised-button color="primary">Submit Quiz</button>
          </div>
        </form>
      </div>

    `
  ,
  styles: [
    `
      .container {
        margin: 15px auto;
        width: 55%;
      }

      .alignCenter {
        text-align: center;
      }

      .colorGreen {
        background-color: forestgreen;
      }
    `
  ]
})

export class QuizComponent implements OnInit {
  quiz;
  quizResult;
  isCorrect = 0;
  apiSummaryURL = 'http://localhost:3000/api/summary';
  summary = {
    employeeId: '',
    title: '',
    date: moment().format('MM/DD/YYYY'),
    results: [],
    total: null
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    public dialog: MatDialog,
    private apiSingleService: ApiSingleService,
    private apiMultiService: ApiMultiService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
    this.apiMultiService.get()
      .subscribe(quiz => {
        this.quiz = quiz;
      });
  }

  onSubmit(quizResult) {

  /* -----------------------------------------------
  ? Steps for cumulative summary object             |
  ------------------------------------------------- */

    // 1. 'User' who is taking quiz
    this.getEmployee();

    // 2. 'Title' of quiz
    this.getQuizName();

    // 3. User's 'Result'
    this.getQuizResult(quizResult);

    // 4. User's 'Score' of quiz
    this.getTotal();

    // 5. Save final result to cumulative summary collection
    this.http.post(this.apiSummaryURL, this.summary).subscribe(res => {
      // console.log(this.summary);
    }, err => {

    }, () => {
      // * 6. Open dialog/display results
      this.displayResults();
    });

  }

  /* ----------------------------------------------
   ? onSubmit() Methods                            |
   ----------------------------------------------- */

  // (1)
  getEmployee() {
    const cookies = this.cookie.getAll();

    if (!this.cookie.check) {
      this.router.navigate(['/quizboard']);
    }

    for (const key in cookies) {
      if (cookies.hasOwnProperty(key)) {
        if (key !== 'isAuthenticated') {
          this.summary.employeeId = key;
        }
      }
    }
  }

  // (2)
  getQuizName() {
    for (const key in this.quiz) {
      if (this.quiz.hasOwnProperty(key)) {
        const questions = this.quiz[key];
        if (key === 'title') {
          this.summary.title = this.quiz[key];
        }
      }
    }
  }

  // (3)
  getQuizResult(quizResult) {
    for (const key in quizResult) {
      if (quizResult.hasOwnProperty(key)) {
        const answer = quizResult[key];
        this.summary.results.push(answer);
      }
    }
  }

  // (4)
  getTotal() {
    this.summary.results.forEach(element => {
      if (element.isCorrect === true) {
        this.isCorrect++;
      }
    });

    this.summary.total = (this.isCorrect / this.summary.results.length) * 100;
  }

  // * (5) has no method: see step 5 in onSubmit()

  // (6)
  displayResults() {
    console.log(this.summary);
    const dialogRef = this.dialog.open(ResultsComponent, {
      width: '80%',
      height: '350px',
      data: this.summary,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      location.reload();
    });
  }

}
