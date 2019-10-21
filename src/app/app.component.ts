/*
============================================
; Title:  app.component.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Core.
;===========================================
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Wilson NodeQuiz App';

  constructor(private router: Router, private cookie: CookieService) {}

  ngOnIt() {
    const cookieValue: string = this.cookie.get('isAuthenticated');
    if (cookieValue) {
      this.router.navigate(['/quizboard']);
    } else {
      this.router.navigate(['/session/login']);
    }
  }
}
