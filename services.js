var app = angular.module('myMod');

app.factory('redditService', function($http) {

  var finalData = [];

  return {
    redditInfo: redditInfo,
    returnResults: returnResults
  }

  function returnResults() {
    return finalData;
  }

  function redditInfo(searchCriteria) {
    var promise = $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/' + searchCriteria + '.json'
    }).then(function successfulCallback(response) {
      console.log(response);
      finalData = response.data.data.children;
      return finalData;
    });

      return promise;

  }

});
