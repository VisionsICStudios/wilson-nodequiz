/*
============================================
; Title:  db-config.js (Week 1)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Additional Guidance: follow students (Slack)
; Date: 20 October 2019
; Description: MEAN NodeQuiz.
;===========================================
*/

const config = {};

// web configs
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.encryption_key = '53cr3T';

// database configs - dev
config.database = {};
config.database.prefix = 'mongodb+srv://';
config.database.username = 'admin:';
config.database.password = 'admin@';
config.database.url = 'cluster0-zmmub.mongodb.net/';
config.database.name = 'wilsonnodequiz?';
config.database.params = 'retryWrites=true&w=majority';

module.exports = config;
