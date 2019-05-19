
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var randoApp = angular.module('randoApp');

randoApp.controller('teamleaderCtrl', function ($scope,$http) {
                       
     $scope.creerRando= function() {
        alert("ok");
        console.log($scope.titre);
    };
    
});



