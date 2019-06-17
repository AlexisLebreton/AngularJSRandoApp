
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var randoApp = angular.module('randoApp');


randoApp.controller('teamleaderCtrl', function ($scope, $http, $cookies, $route) {

    var idMember = $cookies.get('coIdM');

    $http({
        method: 'GET',
        url: 'http://localhost:8181/api/randonnee/randoVotesACloturer/' + idMember})
            .then(function (response) {
                $scope.listRandoVoteTL = response.data;
            });

    $http({
        method: 'GET',
        url: 'http://localhost:8181/api/randonnee/randoInscisACloturer/' + idMember})
            .then(function (response) {
                $scope.listRandoFixeTL = response.data;
            });

    $scope.cloturerInscriptionRando = function (idRando) {
        $http({
            method: 'PATCH',
            url: 'http://localhost:8181/api/randonnee/cloturerInscription/' + idRando})
                .then(function (response) {
                    alert("Inscription cloturée");
                    $route.reload();
                });
    }

    $scope.creerRando = function (newRando) {
        newRando.idTeamLeader = idMember;
        newRando.date1 = newRando.date1.getDate().toString().padStart(2, '0') + '-' + (newRando.date1.getMonth() + 1).toString().padStart(2, '0') + '-' + newRando.date1.getFullYear();
        newRando.date2 = newRando.date2.getDate().toString().padStart(2, '0') + '-' + (newRando.date2.getMonth() + 1).toString().padStart(2, '0') + '-' + newRando.date2.getFullYear();
        newRando.date3 = newRando.date3.getDate().toString().padStart(2, '0') + '-' + (newRando.date3.getMonth() + 1).toString().padStart(2, '0') + '-' + newRando.date3.getFullYear();

        var postData = angular.toJson(newRando, true);

        var req = {
            method: 'POST',
            url: 'http://localhost:8181/api/randonnee/',
            data: postData
        };

        $http(req).then(function () {
            alert("ok");
        }, function () {
            alert("ko");
        });
    };

});

