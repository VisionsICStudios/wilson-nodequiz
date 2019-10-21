/*
============================================
; Title:  core-layout.component.css (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Component.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core-layout',
  template:
    `
      <div>

        <!-- Page header -->
        <header>
          <!-- Toolbar -->
          <mat-toolbar class="menu" role="header" color="primary">

            <mat-toolbar-row>

              <button mat-button class="toolbar__icon-button mat-button">
                <mat-icon>menu</mat-icon>
              </button>

              <button mat-button class="toolbar__icon-button mat-button">
                <span style="margin-left: 5px !important" [routerLink]="['/']">Wilson NodeQuiz App</span>
              </button>

              <div fxFlex></div>

              <button mat-icon-button class="toolbar__icon-button" [matMenuTriggerFor]="menu">
                <mat-icon>account_circle</mat-icon>
              </button>

              <mat-menu #menu="matMenu">

                <button mat-menu-item>

                  <mat-icon>perm_contact_calendar</mat-icon>

                  <span>Employee Profile</span>
                </button>

                <button mat-menu-item>

                  <mat-icon>settings</mat-icon>

                  <span>Settings</span>
                </button>

                <button mat-menu-item (click)="logout()">

                  <mat-icon>exit_to_app</mat-icon>

                  <span>Logout</span>
                </button>
              </mat-menu>
            </mat-toolbar-row>
          </mat-toolbar>
        </header>

        <!-- Main page content -->
        <main>
          <router-outlet></router-outlet>
        </main>
        <!-- </div> -->
      </div>
    `
  ,
  styles: [
    `
      body {
        background-color: forestgreen
      }

      .menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
        color: white;
        background-color: forestgreen;
        border-bottom: 1px solid rgb(104, 119, 104);
        -webkit-box-shadow: 0px 0px 12px 2px rgba(107,117,72,.25);
        -moz-box-shadow: 0px 0px 12px 2px rgba(107,117,72,.25);
        box-shadow: 0px 0px 12px 2px rgba(107,117,72,.25);
      }
    `
  ]
})

export class CoreLayoutComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }

  ngOnInit() {
  }

  logout() {
    this.cookie.delete('isAuthenticated');
    this.router.navigate(['/session/login']);
  }
}
