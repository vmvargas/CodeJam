'use strict';

/**
 * @ngdoc function
 * @name codeJamApp.controller:Problem1Ctrl
 * @description
 * # Problem1Ctrl
 * Controller of the codeJamApp
 */
angular.module('codeJamApp')
    .controller('Problem5Ctrl', ['$scope', function($scope) {
        // object to hold  form information
        // $scope will allow this to pass between controller and view
        $scope.problemData = {
            "id": 5,
            "name": "Family Relation Tracking",
            "description": "Consider the a family modeled into binary tree.  Write code to find the first common ancestor of two members. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.",
            "solutions": [{
                "description": "Trace two siblings back up looking for intersection in their paths.",
                "correct": true
            }, {
                "description": " Making a map how every element is in tree and looking for connection between two target nodes.",
                "correct": false
            }],
            "hints": [
                "No More Hints",
                "What did I just said?"
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
