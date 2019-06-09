var randoApp = angular.module("randoApp", ["ngRoute", "ngCookies"]);

randoApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/membre", {
        templateUrl : "membre.html"
    })
    .when("/secretaire", {
        templateUrl : "secretaire.html"
    })
    .when("/teamleader", {
        templateUrl : "teamleader.html"
    })
    .when("/president", {
        templateUrl : "president.html"
    })
    .when("/login", {
        templateUrl : "login.html"
    });
});

randoApp.run( function($location, $rootScope ,$cookies) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        
        var coIdM = $cookies.get('coIdM');
        if ( !(coIdM === null )&&!( coIdM == '' ) ) {
            $rootScope.homeShow = true;
            $rootScope.membreShow = true;
        }else{
            $rootScope.homeShow = false;
             $rootScope.membreShow = false;
        }
        var coIsTL = $cookies.get('coIsTL');
        if ( ( coIsTL == "true" ) ) {
            $rootScope.tlShow = true;
        }else{
            $rootScope.tlShow = false;
        }
        var coIsSecretaire = $cookies.get('coIsSecretaire');
        if ( ( coIsSecretaire == "true" ) ) {
            $rootScope.secretaireShow = true;
        }else{
            $rootScope.secretaireShow = false;
        }
        var coIsPresident = $cookies.get('coIsPresident');
        if ( ( coIsPresident == "true" ) ) {
            $rootScope.presidentShow = true;
        }else{
            $rootScope.presidentShow = false;
        }

        if ( (coIdM === null )||( coIdM == '' ) ) {
          // no logged user, we should be going to #login
          if ( next.templateUrl != "login.html" ) {
            // not going to #login, we should redirect now
            $location.path( "/login" );
          }
        } 
         
    });
    
 })
 
 randoApp.controller('indexCtrl', function ($scope, $location, $cookies) {
     
     $scope.deco = function () {
        $cookies.put('coIdM', '');
        $cookies.put('coIsTL', '');
        $cookies.put('coIsSecretaire', '');
        $cookies.put('coIsPresident', '');
        $location.path( "/" );
    };
    
});




