/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var randoApp = angular.module('randoApp');
        
randoApp.controller('membreCtrl', function ($scope, $http) {
    
    
    $http({
        method: 'GET',
        url: 'http://localhost:8181/api/randonnee/randoToVotes'})
            .then(function (response) {
                $scope.listRandoVote = response.data;
                console.log(response.data);
            });


});

