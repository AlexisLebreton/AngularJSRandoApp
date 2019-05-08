var randoApp = angular.module('randoApp');

randoApp.controller('secretaireCtrl', function ($scope, $http) {
    
    
    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/randoMembre'})
            .then(function (response) {
                $scope.listMembre = response.data;
                console.log(response.data);
            });
/*
    $scope.majCertifMedical = function (idMembre) {
        alert(idMembre);
        $http({method: 'PATCH', url: 'http://localhost:8080/api/randoMembre/majCertifMedical/1'}).
        then(function(response) {
          $scope.status = response.status;
          $scope.data = response.data;
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });
    };
    */


});


