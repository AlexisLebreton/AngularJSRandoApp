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
            });

    /*
    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/randoMembre/'})
            .then(function (response) {
                $scope.listMembre = response.data;
                console.log(response.data);
                $scope.nbMembre = $scope.listMembre.length;
                $scope.nbMembre = response.data.length;
                $scope.nbTeamL = 0;

                angular.forEach(response.data, function (value, key) {
                    angular.forEach(value, function (v1, k1) {//this is nested angular.forEach loop
                        //console.log(k1+":"+v1);

                        if (k1 == "isTL" && v1) {
                            $scope.nbTeamL++;
                        }
                    });
                });
            });
            */

});

