/*
============================================
; Title: summary.component.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Component.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ApiMultiService } from '../../../../services/api.multi.service';

@Component({
  selector: 'app-summary',
  template:
    `
      <table mat-table [dataSource]="summaryResults" class="mat-elevation-z8">

        <ng-container matColumnDef="employee">

          <th mat-header-cell *matHeaderCellDef> Employee </th>

          <td mat-cell *matCellDef="let element"> {{element.firstName}} {{element.lastName}}</td>
        </ng-container>

        <ng-container matColumnDef="quiz">

          <th mat-header-cell *matHeaderCellDef> Quiz Taken </th>

          <td mat-cell *matCellDef="let element"> {{element.title}} </td>
        </ng-container>

        <ng-container matColumnDef="date">

          <th mat-header-cell *matHeaderCellDef> Date Taken </th>

          <td mat-cell *matCellDef="let element"> {{element.date}} </td>
        </ng-container>

        <ng-container matColumnDef="total">

          <th mat-header-cell *matHeaderCellDef> Total Score </th>

          <td [ngClass]="{'good-result': element.score >= 70, 'bad-result': element.score <= 70}" mat-cell *matCellDef="let element">
            {{element.total}}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>

        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    `
  ,
  styles: [
    `
      table {
        width: 100%;
      }

      th {
        font-size: 20px;
        font-weight: 500;
      }

      td {
        font-size: 18px;
      }

      .good-result {
        color: green;
      }

      .bad-result {
        color: red;
      }
    `
  ],
  providers: [ApiMultiService]
})

export class SummaryComponent implements OnInit {
  summaryResults;

  displayedColumns: string[] = ['employee', 'quiz', 'date', 'total'];

  constructor(private apiMultiService: ApiMultiService) { }

  ngOnInit() {
    this.apiMultiService.get().subscribe(summaries => {
        this.summaryResults = summaries;
    });
  }
}
