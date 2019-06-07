var randoApp = angular.module('randoApp');
        
randoApp.controller('loginCtrl', function ($scope, $http, $rootScope, $location) {
                       
    $scope.connexion = function (connecting) {
        alert(connecting.loginM);
        $http({
        method: 'GET',
        url: 'http://localhost:8080/api/randoMembre/connexion',
        params: {loginM: connecting.loginM, mdpM: connecting.mdpM}})
            .then(function (response) {
                $rootScope.idM = response.data.idM;
                //recup les infos du membre
                $location.path( "/" );
                $scope.tlBtn = false;
                $scope.seBtn = true;
            });
    };
    
    

});



