/*
============================================
; Title: slideshow.component.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Component.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ApiMultiService } from '../../../../services/api.multi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideshow',
  template:
    `
      <div *ngIf="slideshow" class="container">

        <mat-card>

          <mat-card-title>{{slideshow.header}}</mat-card-title>

          <mat-card-content>

            <p-carousel headerText="{{slideshow.caption}}" [value]="images" numVisible="1">

              <ng-template style="text-align: center;" let-image pTemplate="image">

                <div fxLayout="column" fxLayoutAlign="center center">

                  <div fxFlex>
                    <img fxFlexFill src="{{slideshow.img}}">
                  </div>
                </div>
              </ng-template>
            </p-carousel>
          </mat-card-content>

          <mat-card-actions>

            <button (click)="goToQuiz($event, slideshow)" type="button" fxFlex mat-stroked-button color="warn">Take Quiz!</button>
          </mat-card-actions>
        </mat-card>
      </div>
    `
  ,
  styles: [
    `
      .container {
        max-width: 40%;
        margin: 0 auto;
      }

      .ui-carousel-page-links {
        display: none;
      }

      button {
        width: 80%;
      }

      .mat-card-actions, .mat-card-content, .mat-card-title {
        margin-bottom: 0px;
      }

      body .ui-carousel .ui-carousel-viewport .ui-carousel-items .ui-carousel-item {
        border: 0 !important;
      }

      body .ui-carousel .ui-carousel-viewport {
        border: 0;
      }
    `
  ]
})

export class SlideshowComponent implements OnInit {
  slideshow;
  images: any[];

  constructor(private apiMultiService: ApiMultiService, private router: Router) {}

  ngOnInit() {
    this.images = [];
    this.apiMultiService.get().subscribe(res => {
        this.slideshow = res;
        for (const key in this.slideshow.slides) {
          if (this.slideshow.slides.hasOwnProperty(key)) {
            const element = this.slideshow.slides[key];
            this.images.push(element);
          }
        }
    });
  }

  goToQuiz($event, slideshow) {
    slideshow = this.slideshow;
    for (const key in slideshow) {
      if (slideshow.hasOwnProperty(key)) {
        const element = slideshow[key];

        if (element === slideshow._id) {
          this.router.navigate(['quizzes', slideshow.id]);
        }
      }
    }
  }
}
