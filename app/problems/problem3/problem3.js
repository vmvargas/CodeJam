'use strict';

/**
 * @ngdoc function
 * @name codeJamApp.controller:Problem1Ctrl
 * @description
 * # Problem1Ctrl
 * Controller of the codeJamApp
 */
angular.module('codeJamApp')
    .controller('Problem3Ctrl', ['$scope', function($scope) {
        // object to hold  form information
        // $scope will allow this to pass between controller and view
        $scope.problemData = {
            "id": 3,
            "name": "Anagrams",
            "description": "Given a single word (the word) and an array of all valid words (dictionary), determine whether the word is an anagram of any word in the dictionary.",
            "solutions": [{
                "description": "Compare each word with the words in the list by checking for their alphabets.",
                "correct": true
            }, {
                "description": "Search for word having same length as the target word.",
                "correct": false
            }],
            "hints": [
                 "alphabetical order",
                "prime numbers have unique products "
            ]
        };

        $scope.userData = {
            "solutionMarked": "",
            "userAnswered": false
        };

        // process the form
        $scope.processSolution = function() {
            //states that the user answer
            $scope.userData.userAnswered = true;

            //look if user answer is right
            var solutionMarkedPosition = $scope.userData.solutionMarked;

            //either way, save it in userAnsweredRight to display the correct feedback
            $scope.userData.userAnsweredRight = $scope.problemData.solutions[solutionMarkedPosition].correct;
        };

        $scope.hintsShown = [];
        $scope.hintNumber = 0;
        $scope.showNewHint = function(hintNumber) {
            if ($scope.problemData.hints[hintNumber]) {
                $scope.hintsShown.push($scope.problemData.hints[hintNumber]);
            }
            $scope.hintNumber++;
        }
    }]);
