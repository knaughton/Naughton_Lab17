var app = angular.module('myMod');

app.controller('inputCtrl', function($scope, redditService) {

  $scope.searchReddit=function(subReddit) {

    redditService.redditInfo(subReddit);
  }

});
