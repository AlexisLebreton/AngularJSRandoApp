/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var randoApp = angular.module('randoApp');
        
randoApp.controller('membreCtrl', ['$scope','$http',
    function ($scope,$http) {
            $scope.testtest = function () {
                alert("allo");
            };
            
        $http.get('/api/randoMembre/').then(function(response){
         //handle your response here
         alert(response);
         console.log(response);
    });

   
    }
]);

