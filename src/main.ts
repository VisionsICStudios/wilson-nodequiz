/*
============================================
; Title:  main.ts (Week 5)
; Author: Professor Krasso
; Modified: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Core App.
;===========================================
*/

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
