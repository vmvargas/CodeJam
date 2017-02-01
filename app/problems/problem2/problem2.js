'use strict';

/**
 * @ngdoc function
 * @name codeJamApp.controller:Problem1Ctrl
 * @description
 * # Problem1Ctrl
 * Controller of the codeJamApp
 */
angular.module('codeJamApp')
    .controller('Problem2Ctrl', ['$scope', function($scope) {
        // object to hold  form information
        // $scope will allow this to pass between controller and view
        $scope.problemData = {
            "id": 2,
            "name": "Biggest Something out of Nothing",
            "description": "Given a list of words [cat, dog, bear, fish, catdog, bearcat] find the word which is the largest in size as compared to the rest but consist of the the words from the list. So for the above example the result will be “bearcat”.",
            "solutions": [{
                "description": "Look for each word checking their composition as a combination of the other words from list.",
                "correct": true
            }, {
                "description": "Work over strings each character and check for that composition in the word list.",
                "correct": false
            }],
            "hints": [
                " How would you find a longest thread which is a combination of other thread in a pile? ",
                " Mapping the list in a way so that it forms a order of links where each link grows to further words from list which have that parent as the prefix."
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
