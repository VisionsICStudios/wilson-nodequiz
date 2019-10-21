
/*
============================================
; Title:  app.po.ts (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Core.
;===========================================
*/

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
