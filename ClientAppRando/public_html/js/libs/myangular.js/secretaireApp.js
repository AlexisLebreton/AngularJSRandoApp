var randoApp = angular.module('randoApp');

randoApp.controller('secretaireCtrl', function ($scope, $http) {
    
    
    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/randoMembre'})
            .then(function (response) {
                $scope.listMembre = response.data;
                console.log(response.data);
            }, function (response) {
                alert(response.data.message);
            });

    $scope.majCertifMedical = function (idMembre) {
        $http({
            method: 'PATCH',
            url: 'http://localhost:8080/api/randoMembre/majCertifMedical',
            params: {idM: idMembre}})
                .then(function (response) {
                    alert("maj certif ok");
                }, function (response) {
                    alert(response.data.message);
                });
    };
    


});


