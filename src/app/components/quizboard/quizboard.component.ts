/*
============================================
; Title:  quizboard.component.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Component.
;===========================================
*/

// tslint:disable: max-line-length

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMultiService } from '../../../../services/api.multi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizboard',
  template:
    `
      <div class="container">

      <div fxLayout="row wrap" fxLayoutGap="32px" fxLayoutAlign="center center">

        <ng-container *ngFor="let selection of selections">

            <p-card header="{{ selection.title }}" subheader="{{ selection.caption }}" [style]="{width: '360px'}" styleClass="ui-card-shadow">

              <p-header>

                <img src="{{ selection.img }}">
              </p-header>

              <div>{{ selection.description }}</div>

              <p-footer>

                <button (click)="gotoSlideshow($event, selection)" class="btn-success" pButton type="button" value="{{ selection.label }}"></button>
              </p-footer>
            </p-card>
          </ng-container>
        </div>
      </div>
    `
  ,
  styleUrls: [
    `

    `
  ],
  providers: [ApiMultiService]
})

export class QuizboardComponent implements OnInit {

   selection: any;
   selections: { [x: string]: any; hasOwnProperty: (arg0: string) => any; };

  constructor(private apiMultiService: ApiMultiService, private router: Router) {}

  ngOnInit() {
    this.apiMultiService.get().subscribe((res: any) => {
        this.selections = res;
      });
  }

  // This method will send the employee to the slideshow.
  gotoSlideshow($event: any, selection: { _id: any; selectionId: any; }) {
    this.selection = selection;

    // Iterate through the for loop.
    for (const key in this.selections) {
      if (this.selections.hasOwnProperty(key)) {
        const element = this.selections[key];

        // Condition that IF there's an error, console the error.
        if (!element) {
          throw console.error('Oops! Where is the slideshow.');
        }

        // If the selection is valid, send employee to the slideshow.
        if (element._id === selection._id) {
          this.router.navigate(['slideshows', selection.selectionId]);
        }
      }
    }
  }
}
