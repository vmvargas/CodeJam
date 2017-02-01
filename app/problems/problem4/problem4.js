'use strict';

/**
 * @ngdoc function
 * @name codeJamApp.controller:Problem1Ctrl
 * @description
 * # Problem1Ctrl
 * Controller of the codeJamApp
 */
angular.module('codeJamApp')
    .controller('Problem4Ctrl', ['$scope', function($scope) {
        // object to hold  form information
        // $scope will allow this to pass between controller and view
        $scope.problemData = {
            "id": 4,
            "name": "Divide and Conquer",
            "description": "Describe how you could use a single array to implement three stacks.",
            "solutions": [{
                "description": "Dividing array in equally segmented stacks.",
                "correct": true
            }, {
                "description": "Taking each stack sequentially and inserting elements as they are received as input. ",
                "correct": false
            }],
            "hints": [
                "How would you fill a shelve with stack of multiple specific course books",
                "Oops No more hints"
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
