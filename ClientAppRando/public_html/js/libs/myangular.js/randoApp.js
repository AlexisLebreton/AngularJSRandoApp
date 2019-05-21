var randoApp = angular.module("randoApp", ["ngRoute"]);

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

randoApp.run( function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ( $rootScope.idM == null ) {
        // no logged user, we should be going to #login
        if ( next.templateUrl != "login.html" ) {
          // not going to #login, we should redirect now
          $location.path( "/login" );
        }
      }         
    });
 })




