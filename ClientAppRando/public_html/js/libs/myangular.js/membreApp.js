/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var randoApp = angular.module('randoApp');

randoApp.controller('membreCtrl', function ($scope, $http) {

    $scope.voterDateRando = function (randoId, dateChoisie) {
        alert(randoId + dateChoisie);
        var dataToSend = {
            idMembre: '1',
            dateChoisie: dateChoisie
        };
        
   /*     $http.post('http://localhost:8181/api/randonnee/voterCreneau/' + randoId, JSON.stringify(data)).then(function (response) {

if (response.data)

$scope.msg = "Post Data Submitted Successfully!";

}, function (response) {

$scope.msg = "Service not Exists";

$scope.statusval = response.status;

$scope.statustext = response.statusText;

$scope.headers = response.headers();

};*/



        $http({
            method: 'PATCH',
            url: 'http://localhost:8181/api/randonnee/voterCreneau/' + randoId})
                .then(function (response) {
                    
                    console.log(response.data);
                });
    };

    $http({
        method: 'GET',
        url: 'http://localhost:8181/api/randonnee/randoToVotes'})
            .then(function (response) {
                $scope.listRandoVote = response.data;
                console.log(response.data);
            });

    $http({
        method: 'GET',
        url: 'http://localhost:8181/api/randonnee/randoInscriNonCloture'})
            .then(function (response) {
                $scope.listRandoInscriOuverte = response.data;
                console.log(response.data);
            });


});

