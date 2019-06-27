var randoApp = angular.module('randoApp');

randoApp.controller('presidentCtrl', function ($scope, $http) {
    
    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/randoMembre/reporting'})
            .then(function (response) {
                $scope.listInfosMembre = response.data;
                $scope.nbMembre = $scope.listInfosMembre.nbMembre;
                $scope.nbTL = $scope.listInfosMembre.nbTL;
                $scope.totalCotisationRegle = $scope.listInfosMembre.totalCotisationRegle;
                console.log(response.data);
            }, function (response) {
                alert(response.data.message);
            });
            
    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/randoAsso/reporting'})
            .then(function (response) {
                $scope.listInfosAsso = response.data;
                $scope.cotisationMin = $scope.listInfosAsso.cotisationMin;
                $scope.cotisationPrevu = $scope.cotisationMin*$scope.nbMembre;
            }, function (response) {
                alert(response.data.message);
            });
            
    $http({
        method: 'GET',
        url: 'http://localhost:8181/api/randonnee/reporting'})
            .then(function (response) {
                $scope.listInfosRando = response.data;
                $scope.totalCoutRando = $scope.listInfosRando.totalCoutRando;
                $scope.nbRandoPos = $scope.listInfosRando.nbRandoPos;
                $scope.encour = $scope.listInfosRando.encour;
                
                console.log(response.data);
            }, function (response) {
                alert(response.data.message);
            });

   

});

