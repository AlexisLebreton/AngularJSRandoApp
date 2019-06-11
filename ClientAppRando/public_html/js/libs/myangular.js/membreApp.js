/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var randoApp = angular.module('randoApp');

randoApp.controller('membreCtrl', function ($scope, $cookies, $http, $route) {

    var idMember = $cookies.get('coIdM');

    //maj infos

    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/randoMembre/' + idMember})
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

        $http(req).then(function () {
            alert("ok");
        }, function () {
            alert("ko");
        });

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
        $http({
            method: 'PATCH',
            url: 'http://localhost:8181/api/randonnee/voterCreneau/' + randoId,
            params: {idMembre: idMember, dateChoisie: date}})
                .then(function (response) {
                    alert("vote enregistré");
                    $route.reload();
                });
    };

    //inscription à une rando

    $scope.inscrireRando = function (randoId) {
        $http({
            method: 'PATCH',
            url: 'http://localhost:8181/api/randonnee/inscriptionRando/' + randoId,
            params: {idMembre: idMember}})
                .then(function (response) {
                    alert("inscription enregistrée");
                    $route.reload();
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
        url: 'http://localhost:8181/api/randonnee/randoInscriNonCloture/' + idMember })
            .then(function (response) {
                $scope.listRandoInscriOuverte = response.data;
            });


});

