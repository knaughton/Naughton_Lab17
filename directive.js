var app = angular.module('myMod');

app.directive('redditPost', function() {

  return {
    replace: false,
    restrict: 'E',
    templateUrl: 'reddit.html'
  }
})
