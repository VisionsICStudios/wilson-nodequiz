/*
============================================
; Title:  app.routing.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Routing.
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/guard/auth.service';

import { CoreLayoutComponent } from './shared/core/layout/core-layout/core-layout.component';
import { AuthLayoutComponent } from './shared/auth/layout/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SummaryComponent } from './components/summary/summary.component';
import { QuizboardComponent } from './components/quizboard/quizboard.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { QuizComponent } from './quiz/quiz.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/quizboard', pathMatch: 'full' },
  {
    path: 'quizboard',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: QuizboardComponent, canActivate: [AuthService] }
    ]
  },
  {
    path: 'session',
    component: CoreLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'not-found', component: NotFoundComponent }
    ]
  },
  {
    path: 'slideshows/:id',
    component: AuthLayoutComponent,
    children: [{ path: '', component: SlideshowComponent }]
  },
  {
    path: 'quizzes/:id',
    component: AuthLayoutComponent,
    children: [{ path: '', component: QuizComponent }]
  },
  {
    path: 'summary',
    component: AuthLayoutComponent,
    children: [{path: '', component: SummaryComponent}]
  },
  { path: '**', redirectTo: 'session/not-found' },
];
