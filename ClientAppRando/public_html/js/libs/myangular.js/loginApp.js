var randoApp = angular.module("randoApp");
        
randoApp.controller('loginCtrl', function ($scope, $http, $location, $cookies) {
                       
    $scope.connexion = function (connecting) {
        $http({
        method: 'GET',
        url: 'http://localhost:8080/api/randoMembre/connexion',
        params: {loginM: connecting.loginM, mdpM: connecting.mdpM}})
            .then(function (response) {
                $cookies.put('coIdM', response.data.idM);
                $cookies.put('coIsTL', response.data.isTL);
                $cookies.put('coIsSecretaire', response.data.isSecretaire);
                $cookies.put('coIsPresident', response.data.isPresident);
                //recup les infos du membre
                $location.path( "/" );
                
            }, function (response) {
                alert(response.data.message);
            });
    };
    
    $scope.inscription = function (inscrit) {
        var postData = angular.toJson(inscrit, true);
        
        var req = {
            method: 'POST',
            url: 'http://localhost:8080/api/randoMembre',
            data: postData
           };
        
        $http(req).then(function(){ alert("ok"); }, function(response){ alert(response.data.message); });
        
    };
    
    

});



