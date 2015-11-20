'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MyapiCtrl
 * @description
 * # MyapiCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('MyapiCtrl', function ($scope, $http) {
    $http.get('http://rxsharp.github.io/my-APIs/shorthandColors.json').success(function(theapi) {
    $scope.myapi = theapi.results;
    });
  });
