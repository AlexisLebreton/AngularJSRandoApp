
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var randoApp = angular.module('randoApp');
        
randoApp.controller('teamleaderCtrl', ['$scope','$http',
    function ($http,$scope) {
                       
    function creerRando() {
        alert("ok");
        console.log($scope.titre);
    };
    }
    

]);



