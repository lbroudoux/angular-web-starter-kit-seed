'use strict';

var module1 = angular.module('Module1', []);

module1.controller('Module1Controller', ['$scope', function($scope) {
  $scope.twoops = [
    {'author': 'lbroudoux', 'text': 'Hello World !'},
    {'author': 'abroudoux', 'text': 'Hello World too !'}
  ];
  
  $scope.name = 'Laurent';
}]);