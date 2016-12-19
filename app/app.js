'use strict';

/**
 * @ngdoc overview
 * @name codeJamApp
 * @description
 * # codeJamApp
 *
 * Main module of the application.
 */
angular
    .module('codeJamApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: 'welcome/welcome.html',
          })
          .state('contact', {
              url: '/contact',
              templateUrl: 'contact/contact.html',
              controller: 'ContactCtrl'
          })
          .state('problems', {
              url: '/problems',
              templateUrl: 'problems/problems.html',
              controller: 'ProblemsCtrl'
          })
          .state('one', {
              url: '/one',
              templateUrl: '/problems/problem1/problems.one.html',
              controller: 'Problem1Ctrl'
          });
      $urlRouterProvider.otherwise('/home');
    });


