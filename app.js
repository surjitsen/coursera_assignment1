(function () {
'use strict';

angular.module('Module1Coding', [])

.controller('Module1CodingController', function ($scope) {
  $scope.name = "";
  $scope.message = "Please enter data first";

  $scope.displayHowMuch = function () {
    var totalItems = calculateNumberOfItems($scope.name);
    if (totalItems === 0) {
      $scope.message = "Please enter data first";
    }
      else if (totalItems < 4) {
      $scope.message = "Enjoy!";
    }
      else {
        $scope.message = "Too much!";
      }
  };


  function calculateNumberOfItems(string) {
    var str = string.trim();
    if (str === '')
      return 0;
    else {
      return str.split(" ").length;
    }
  }

});


})();
