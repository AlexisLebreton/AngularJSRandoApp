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
        var coIdM = $cookies.get('coIdM');
        $cookies.put('coIdM', '');
        $location.path( "/" );
    };

    

});




