'use strict';

/**
 * @ngdoc function
 * @name codeJamApp.controller:Problem1Ctrl
 * @description
 * # Problem1Ctrl
 * Controller of the codeJamApp
 */
angular.module('codeJamApp')
    .controller('Problem1Ctrl', ['$scope', function($scope) {
        // object to hold  form information
        // $scope will allow this to pass between controller and view
        $scope.problemData = {
            "id": 1,
            "description": "Given a row of students where each student has some amount of money. Return the position of two students who have combined sum as specified target amount.",
            "solutions": [{
                "description": "Loop through each element x and find if there is another value that equals to target - x.",
                "correct": true
            }, {
                "description": "Find the students with the complement amount of money so that the net sum is exactly the target amount and then find their respective indexes.",
                "correct": false
            }],
            "hints": [
                "Assume the data structure as array of student where (index + 1) represent the position of student in the row and the value stored at the index is the amount money that student has.",
                "Think of every index and its amount as a data structure cell and try mapping it in a structure where it is easier to access."
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
