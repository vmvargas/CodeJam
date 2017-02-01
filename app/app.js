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
        'ui.router',
        'hljs'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'welcome/welcome.html',
            })
            .state('tips', {
                url: '/tips-and-tricks',
                templateUrl: 'tips/tips.html',
                controller: 'TipsCtrl'
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
            })
            .state('two', {
                url: '/two',
                templateUrl: '/problems/problem2/problems2.html',
                controller: 'Problem2Ctrl'
            })
            .state('three', {
                url: '/three',
                templateUrl: '/problems/problem3/problems3.html',
                controller: 'Problem3Ctrl'
            }).state('four', {
                url: '/four',
                templateUrl: '/problems/problem4/problems4.html',
                controller: 'Problem4Ctrl'
            }).state('five', {
                url: '/five',
                templateUrl: '/problems/problem5/problems5.html',
                controller: 'Problem5Ctrl'
            });
        $urlRouterProvider.otherwise('/home');
    })
    .config(function(hljsServiceProvider) {
        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
    });
