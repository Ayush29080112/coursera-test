(function(){

  'use strict';// to protect any variable bleeding as if we write x="hello" it goes to global scope by default so using 'use strict' it protects us by giving error


  angular.module('myFirstApp',[])//this has been bound by angular to html tag using ng-app attribute

  .controller("myFirstController",function($scope){
    $scope.name="Ayu";
    $scope.hello=function(){
      return "Hello World";
    }
  });
})();//iife -imediately invoked function expression
// only variable that angular exposes globally is angular.
//[] in module contains dependencies in the project.
//
