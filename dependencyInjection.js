(function(){
  'use strict';
angular.module("depenInjection",[])
.controller("dInjection",ayush);

function ayush($scope,$filter){
  $scope.name="Ayush";
  $scope.upper= function(){
    var upCase=$filter('uppercase');
    $scope.name=upCase($scope.name);
  };
}

function annotateMe(name,job,blah){
  return "blah";
}
console.log(annotateMe);
})();
