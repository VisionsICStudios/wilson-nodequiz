/*
============================================
; Title:  quizboard.component.spec.ts (Wk 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz QA.
;===========================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizboardComponent } from './quizboard.component';

describe('QuizboardComponent', () => {
  let component: QuizboardComponent;
  let fixture: ComponentFixture<QuizboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
