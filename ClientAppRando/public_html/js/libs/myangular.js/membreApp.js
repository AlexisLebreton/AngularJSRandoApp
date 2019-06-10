/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var randoApp = angular.module('randoApp');

randoApp.controller('membreCtrl', function ($scope, $cookies, $http) {

    var idMember = $cookies.get('coIdM');
    
    //maj infos
    
    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/randoMembre/'+idMember})
            .then(function (response) {
                $scope.membreRes = response.data;
                $scope.membreMaj = $scope.membreRes;
            });
            
    $scope.majMembre = function (membreMaj) {
        var putData = angular.toJson(membreMaj, true);
        
        var req = {
            method: 'PUT',
            url: 'http://localhost:8080/api/randoMembre',
            data: putData
           };
        
        $http(req).then(function(){ alert("ok"); }, function(){ alert("ko"); });
        
    };
    
    //payer une cotisation
    
    $scope.payerCotisation = function (paiement) {
        $http({
        method: 'PATCH',
        url: 'http://localhost:8080/api/randoMembre/payerCotisation',
        params: {idM: idMember, iban: paiement.iban, cotisation: paiement.cotisation}})
            .then(function (response) {
                alert("payement de cotisation réussi");
            });
    };
    
    //voter pour une date de rando
    
    $scope.voterDateRando = function (randoId, date) {
        alert(randoId + date);
        $http({
            method: 'PATCH',
            url: 'http://localhost:8181/api/randonnee/voterCreneau/' + randoId,
            params: {idMembre: idMember, dateChoisie: date}})
                .then(function (response) {
                    alert("vote enregistré");
                });
    };

    $http({
        method: 'GET',
        url: 'http://localhost:8181/api/randonnee/randoToVotes/' + idMember})
            .then(function (response) {
                $scope.listRandoVote = response.data;
            });

    $http({
        method: 'GET',
        url: 'http://localhost:8181/api/randonnee/randoInscriNonCloture'})
            .then(function (response) {
                $scope.listRandoInscriOuverte = response.data;                
            });


});

