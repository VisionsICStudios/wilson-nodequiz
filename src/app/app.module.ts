/*
============================================
; Title:  app.module.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Module.
;===========================================
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'primeng/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { CoreLayoutComponent } from './shared/core/layout/core-layout/core-layout.component';
import { LoginComponent } from './components/login/login.component';
import { ResultsComponent } from './shared/results/results.component';
import { SummaryComponent } from './components/summary/summary.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthLayoutComponent } from './shared/auth/layout/auth-layout/auth-layout.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizboardComponent } from './components/quizboard/quizboard.component';

@NgModule({
  declarations: [
    AppComponent, CoreLayoutComponent, LoginComponent, SummaryComponent,
    NotFoundComponent, AuthLayoutComponent, SlideshowComponent,
    QuizComponent, ResultsComponent, QuizboardComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, BrowserAnimationsModule,
    MatIconModule, CardModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSidenavModule,
    MatToolbarModule, MatTableModule, MatMenuModule, MatDividerModule, MatCheckboxModule, MatDialogModule, MatRadioModule,
    MatListModule, MatStepperModule, FormsModule, ReactiveFormsModule, FlexLayoutModule,
    HttpClientModule, CommonModule, CarouselModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [ResultsComponent]
})

export class AppModule {}
