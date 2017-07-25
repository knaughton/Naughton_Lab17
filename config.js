var app = angular.module('myMod');

app.config(function($routeProvider) {

  $routeProvider
    .when('/input', {
      controller: 'inputCtrl',
      templateUrl: 'input.html'
    })

    .when('/output', {
      controller: 'outputCtrl',
      templateUrl: 'output.html'
    })
    .otherwise( { redirectTo: '/input'});
});
