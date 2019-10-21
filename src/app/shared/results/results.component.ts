/*
============================================
; Title:  results.component.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Core.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-results',
  template:
    `
      <h1 fxLayoutAlign="start center" mat-dialog-title cdkFocusInitial>{{data.title}}</h1>

      <mat-dialog-content>

        <h3>{{data.date}}</h3>

        <h3 [ngClass]="{'wrong-answer': data.total <= 69, 'right-answer': data.total >= 70 }">
          Employee {{data.firstName}} {{data.lastName}}'s Results: {{data.total}}
        </h3>

      <mat-divider></mat-divider>

        <div *ngFor="let item of data.results; let i=index">

          <p>{{i + 1}}. {{item.question}}</p>

          <p [ngClass]="{'wrong-answer': item.isCorrect==false, 'right-answer': item.isCorrect==true}">
            {{item.answer}}: {{item.isCorrect}}
          </p>
        </div>
      </mat-dialog-content>

      <mat-dialog-actions align="end">

        <button color="primary" mat-raised-button mat-dialog-close>Accept The Result</button>
      </mat-dialog-actions>
    `
  ,
  styles: [
    `
      .wrong-answer {
        color: red;
      }

      .right-answer {
        color: green;
      }

    `
  ]
})

export class ResultsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
}
