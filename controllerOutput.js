var app = angular.module('myMod');

app.controller('outputCtrl', function($scope, redditService) {

  $scope.finalData = redditService.returnResults();
  console.log($scope.finalData);

});
