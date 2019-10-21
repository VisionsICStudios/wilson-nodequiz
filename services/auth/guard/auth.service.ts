/*
============================================
; Title:  auth.service.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Service.
;===========================================
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuthenticated = this.cookieService.get('isAuthenticated');

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/session/login']);
      return false;
    }
  }
}
